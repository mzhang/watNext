const { response } = require('express');
const express = require('express');
const router = express.Router();
const registerModel = require("../schema/registerSchema");
const bcrypt = require('bcrypt');

router.post('/register',async (req,res)=>{

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const registeredUser = new registerModel({
        username:req.body.username,
        password:hashedPassword
    })
    registeredUser.save()
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
})

module.exports = router;