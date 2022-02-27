const express = require('express')
const router = express.Router()
const signinTemplate = require('../models/Signinmodel')
// saprate api caller for the values
// const User = new mongoose.model("User", userSchema)
router.post("/login", (req, res) => {
    const { email, password } = req.body
    signinTemplate.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user })
            } else {
                res.send({ message: "password didn't match" })
            }
        } else {
            res.send({ message: "User not Registered!!!" })
        }
    })
})


module.exports = router