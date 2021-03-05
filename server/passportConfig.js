const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy

const User = require('./schema/UserSchema')

const cookieExtractor = req => {
  let token = null
  if (req && req.cookies) token = req.cookies['access_token']
  return token
}

passport.use(
  new JwtStrategy(
    { jwtFromRequest: cookieExtractor, secretOrKey: process.env.JWT_KEY },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) return done(err, false)
        if (user) return done(null, user)
        return done(null, false)
      })
    }))

//for logins
passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) return done(err)
    //if no user found
    if (!user) return done(null, false)
    //if password is correct, run done function
    user.comparePassword(password, done)
  })
}))