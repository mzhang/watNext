const { response } = require('express');
const express = require('express');
const router = express.Router();
const registerModel = require("../schema/registerSchema");

router.post('/register',(req,res)=>{
    const registeredUser = new registerModel({
        username:req.body.username,
        password:req.body.password
    })
    registeredUser.save()
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
})

module.exports = router;