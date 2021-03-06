const express = require('express')
const router = express.Router()
const passport = require('passport')
const passportConfig = require('../passportConfig')
const jwt = require('jsonwebtoken')

router.use(passport.initialize())

const User = require('../schema/UserSchema')
const Task = require('../schema/TaskSchema')
const Comment = require('../schema/CommentSchema')
const { ObjectID } = require('mongodb')

router.post('/addComment', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { task, comment } = req.body

    const newComment = new Comment({
      user: req.user.username,
      task: task,
      commentContent: comment,
    })

    newComment.save()
      .then(() => {
        res.status(200)
          .json({ message: 'Comment saved!', comment: comment })
      })
      .catch(err => {
        res.status(400).json(err)
      })
  })

router.post('/markAsDone/:taskID',
  passport.authenticate('jwt', { session: false }), async (req, res) => {

    await Task.updateOne({ _id: req.params.taskID },
      { $addToSet: { completedUsers: req.user.username } })
      .catch(err => {
        res.status(400).json(err)
        return
      })
    return res.status(200)
      .json({ message: 'Task marked as complete!', TaskID: req.params.taskID })
  })

router.post('/markAsUndone/:taskID',
  passport.authenticate('jwt', { session: false }), async (req, res) => {

    await Task.updateOne({ _id: req.params.taskID },
      { $pull: { completedUsers: req.user.username } })
      .catch(err => {
        res.status(400).json(err)
        return
      })
    return res.status(200)
      .json(
        { message: 'Task marked as incomplete!', TaskID: req.params.taskID })
  })

router.get('/completedStatus/:taskID',
  passport.authenticate('jwt', { session: false }), async (req, res) => {
    const task = await Task.findById(req.params.taskID)
      .catch(err => {
        res.status(400).json(err)
        return
      })
    const isDone = (task.completedUsers).includes(req.user.username)
    return res.status(200).json({ isDone: isDone, task: req.params.taskID })
  })

router.get('/taskMetadata/:taskID',
  passport.authenticate('jwt', { session: false }), async (req, res) => {
    const task = await Task.findById(req.params.taskID)
      .catch(err => {
        res.status(400).json(err)
        return
      })
    const isDone = (task.completedUsers).includes(req.user.username)
    const commentCount = await Comment.countDocuments(
      { task: { $eq: req.params.taskID } })
      .catch(err => {
        res.status(400).json(err)
        return
      })
    return res.status(200)
      .json(
        { isDone: isDone, commentCount: commentCount, task: req.params.taskID })
  })

router.get('/getComments/:id', async (req, res) => {
  Comment.find({ task: req.params.id }).exec((err, document) => {
    if (err) res.status(500)
      .json({ message: 'Error has occured', msgError: true })
    else res.status(200).json({ comment: document })
  })
})

router.get('/getTasksDateFilteredWithMetadata',
  passport.authenticate('jwt', { session: false }), async (req, res) => {
    const taskList = await Task.find({ endTime: { $gte: Date.now() } })
      .sort({ endTime: 1 })
    const outList = []
    const promises = taskList.map(task => new Promise(async (resolve) => {
      task = task.toObject()
      task.isDone = (task.completedUsers).includes(req.user.username)
      task.commentCount = await Comment.countDocuments(
        { task: { $eq: task._id } }).catch(err => {
        res.status(400).json(err)
        return
      })
      resolve(outList.push(task))
    }))
    Promise.all(promises)
      .then((results) => {
        // console.log(outList.sort((a,b)=>a.endTime-b.endTime)==outList);
        res.json({ tasks: outList.sort((a, b) => a.endTime - b.endTime) })
      })
      .catch((err) => res.json({ tasks: err }))
  })

router.get('/getTasksDateFiltered', async (req, res) => {
  const taskList = await Task.find({ endTime: { $gte: Date.now() } })
    .sort({ endTime: 1 })
  const outList = []
  const promises = taskList.map(task => new Promise(async (resolve) => {
    task = task.toObject()
    task.isDone = false
    task.commentCount = await Comment.countDocuments(
      { task: { $eq: task._id } }).catch(err => {
      res.status(400).json(err)
      return
    })
    resolve(outList.push(task))
  }))
  Promise.all(promises)
    .then((results) => {
      // console.log(outList.sort((a,b)=>a.endTime-b.endTime)==outList);
      res.json({ tasks: outList.sort((a, b) => a.endTime - b.endTime) })
    })
    .catch((err) => res.json({ tasks: err }))
})

router.get('/getTasks', async (req, res) => {
  const taskList = await Task.find({})
  return res.json({ tasks: taskList })
})

router.delete('/deleteComment/:commentId',
  passport.authenticate('jwt', { session: false }), async (req, res) => {
    const targetComment = await Comment.findById(req.params.commentId)
      .catch(err => {
        res.status(400).json(err)
        return
      })
    if (!targetComment) return res.status(400)
      .json({ message: `Comment with ID ${req.params.commentId} not found!` })
    if (req.user.username != targetComment.user) return res.status(403)
      .json({ message: 'Don\'t try to delete someone else\'s comment!' })
    await Comment.deleteOne({ '_id': ObjectID(targetComment._id) })
      .catch(err => {
        res.status(400).json(err)
        return
      })
    return res.status(200)
      .json(
        { message: `Successfully removed comment with ID ${targetComment._id}` })

  })

module.exports = router