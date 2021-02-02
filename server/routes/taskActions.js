const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportConfig = require('../passportConfig');
const jwt = require("jsonwebtoken");

const User = require("../schema/UserSchema");
const Task = require("../schema/TaskSchema");
const Comment = require("../schema/CommentSchema");
const { ObjectID } = require('mongodb');

router.post('/addComment',passport.authenticate('jwt',{session : false}), async (req,res)=>{
    const {task, comment} = req.body;

    const newComment = new Comment({
        user: req.user.username,
        task: task,
        commentContent: comment
    })

    await newComment.save().catch(err=>{res.status(400).json(err); return})
    return res.status(200).json({message:"Comment saved!", comment:comment})
})

router.get('/getComments/:id', async (req,res)=>{
    Comment.find({task:req.params.id}).exec((err,document)=>{
        if (err) res.status(500).json({message : "Error has occured", msgError: true});
        else res.status(200).json({comment : document}); 
    });
})

router.get("/getTasksDateFiltered", async (req, res)=>{
    const taskList = await Task.find({endTime: {$gte: Date.now()}}).sort({endTime: 1});
    return res.json({tasks: taskList});
});

router.get("/getTasks", async (req, res)=>{
    const taskList = await Task.find({});
    return res.json({tasks: taskList});
});

router.delete("/deleteComment/:commentId",passport.authenticate('jwt',{session : false}), async (req, res)=>{
    const targetComment = await Comment.findById(req.params.commentId).catch(err=>{res.status(400).json(err); return})
    if (!targetComment) return res.status(400).json({message: `Comment with ID ${req.params.commentId} not found!`});
    if (req.user.username != targetComment.user) return res.status(403).json({message : "Don't try to delete someone else's comment!"});
    await Comment.deleteOne({ "_id" : ObjectID(targetComment._id) }).catch(err=>{res.status(400).json(err); return});
    return res.status(200).json({message : `Successfully removed comment with ID ${targetComment._id}`})
    
});

module.exports = router;