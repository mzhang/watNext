const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportConfig = require('../passportConfig');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

router.use(passport.initialize());

const User = require("../schema/UserSchema");

const signToken = userID => {
    //issued at time (iat) auto-created
    return jwt.sign({
        iss : "matt",
        sub : userID
    }, "matt", {expiresIn: "144h"})
}

router.post('/register',async (req,res)=>{
    const {username, password} = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const sameUsernameExists = await User.findOne({username}).catch((err) => res.status(500).json({message: err.toString()}))
    if (sameUsernameExists) return res.status(400).json({message:"User already Exists!"})

    const registeredUser = new User({
        username:username,
        password:hashedPassword
    })

    registeredUser.save().then(data=>res.status(200).json(data))
        .catch(err=>res.status(400).json(err))
})

router.post('/login', passport.authenticate('local',{session:false}), (req, res)=>{
    if (req.isAuthenticated()) {
        const {_id, username} = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, {httpOnly: true, sameSite:true});
        res.status(200).json({isAuthenticated : true, username : username});
    }
});

//remove jwt on logout
router.get("/logout", passport.authenticate('jwt',{session : false}),(req, res)=>{
    res.clearCookie('access_token');
    res.json({isAuthenticated : false, username : ""});
});

router.get('/locked', passport.authenticate('jwt',{session : false}), (req, res)=>{
    res.status(200).json({message : `Hey ${req.user.username}, you found the secret page!`});
});

// router.get("/authenticated", passport.authenticate('jwt', {session:false}),(req,res)=>{
//     res.status(200).json({isAuthenticated : true, user : req.user});
// })

router.get("/authenticated", (req,res)=>{
    res.status(200).json({isAuthenticated : req.isAuthenticated, user : req.user});
})

module.exports = router;