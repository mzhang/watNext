const { response } = require('express');
const express = require('express');
const session = require('express-session');
const router = express.Router();
const registerModel = require("../schema/UserSchema");
const bcrypt = require('bcrypt');

const passport = require('passport');
const passportConfig = require('../passportConfig');
const UserSchema = require('../schema/UserSchema');

router.use(passport.initialize());
router.use(session({ secret: "matt" }));
router.use(passport.session());

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

router.post('/login', passport.authenticate('local'), (req, res)=>{
    if (req.isAuthenticated()) {
        const {username} = req.user;
        res.status(200).json({message : `Hey ${username}, you're in!`});
    }
});

router.post('/locked', (req, res)=>{
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        const {username} = req.user;
        res.status(200).json({message : `Hey ${username}, you found the secret page!`});
    } 
    else res.status(403).json({message : `Go away!`});
});


module.exports = router;