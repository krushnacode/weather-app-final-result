const express = require('express')
const router = express.Router()
const SignupTemplateCopy = require('../models/Signupmodels')
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')

router.post('/signup', (req, res, next) => {
    SignupTemplateCopy.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                console.log("Email Exist in the data base")
                return res.status(409).json({
                    message: "Mail-ID exists"
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const signedUpUser = new SignupTemplateCopy({
                            // _id: new mongoose.Type.ObjectId(),
                            FirstName: req.body.FirstName,
                            LastName: req.body.LastName,
                            username: req.body.username,
                            email: req.body.email,
                            password: hash,
                            confirmPassword: req.body.confirmPassword,
                            // isActive: true
                        })
                        signedUpUser.save()
                            .then(data => {
                                res.json(data).json({
                                    message: "User Created!!!"
                                });
                            })
                            .catch(error => {
                                res.json(error)
                            })
                    }
                });
            }
        });
});




router.post('/login', async (req, res) => {
    const { email, password } = req.body

    SignupTemplateCopy.findOne({ email: email }, (err, user) => {
        if (user) {
            // isActive === true


            // await SignupTemplateCopy.findOne(email)
            if (user.isActive === true) {
                // res.send('isActive')
                console.log("is ACtive")
                if (bcrypt.compare(req.body.password, password)) {

                    res.send({
                        message: "User is actived || Login Sucessfull",
                        status: 200
                    })

                } else {

                    // const isAuthorized = false;
                    res.send({ message: "password dont match" })
                    // res.send({ message: "user is not active" })
                }

            } else {

                console.log('User is Inactive')
                res.send({ message: "User is Inactive", status: 400 })
            }
        }
    })
})





router.post('/user/:id', (req, res) => {
    // res.send("new data will be updated")
    // console.log("before if");

    if (req.params.id) {

        const id = req.params.id;

        // console.log("before db");

        SignupTemplateCopy.findById(id)
            .then(data => {
                if (!data) {
                    console.log("after id");
                    res.status(404).send({ message: "Not found user with id " + id })
                } else {
                    //    console.log("before id");
                    const useractivation = req.body.isActive;
                    console.log(data)


                    SignupTemplateCopy.findByIdAndUpdate(id, { isActive: useractivation })
                        .then(user => {
                            res.send(user)
                        })
                        .catch(err => {
                            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
                        })
                    res.send(data)
                }
            })
            .catch(err => {
                // console.log("after catch");
                res.status(500).send({ message: "Erro retrieving user with id " + id })
            })

    } else {
        console.log('plase enter valid ID')
    }


})




router.delete('/:userId', (req, res, next) => {
    SignupTemplateCopy.remove({ _id: req.params.userId })
        .exec()
        .then(data => {
            res.status(200).json({
                message: "user deleted"
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})



router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/home');
        }
    });
});
module.exports = router