const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./schema/UserSchema');

// function initialize(passport, getUserByName) {
//     const authenticateUser = (username, password, callback) => {
//         const user = getUserByName(username);
//         if (!user) return callback(null, false, { message: "No user with that name exists!"})

//         try{
//             if (await bcrypt.compare(password,user.password)) return callback(null, user);
//             else return callback(null, false, { message: "Username and password do not match!"}) 
//         } catch (e) {
//             return callback(e)
//         }
//     }

//     passport.use(new LocalStrategy({ usernameField: 'username', passwordField: 'password'}), authenticateUser);
//     passport.serializeUser((user,callback) => {});
//     passport.deserializeUser((id,callback) => {});
// }

const authenticateUser = (username, password, callback) => {
    User.findOne({username}, (err,user) =>{
        if (err) return callback(err);
        if (!user) return callback(null, false, { message: "No user with that name exists!"})
        user.comparePassword(password, callback)
    })
};

passport.use(new LocalStrategy(authenticateUser));
passport.serializeUser((user,callback) => {callback(null, user.id)});
passport.deserializeUser((id,callback) => {return callback(null, User.findById(id))});