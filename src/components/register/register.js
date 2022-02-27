
import React, { useState } from 'react'
import "./register.css"
import axios from "axios"
import { useHistory } from 'react-router-dom'
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

function Registration() {


    const history = useHistory()

    const [initialValues, setUser] = useState({

        FirstName: '',
        LastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const validationSchema = Yup.object({
        FirstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required("FirstName is required"),
        LastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('LastName is required'),
        username: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('username is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required')
    }).defined()


    const register = async (registerData) => {
        console.log("axios axios", registerData);
        const headers = {
            'Content-Type': 'application/json'
        }
        await axios.post("http://localhost:4000/app/signup", registerData, { headers })
            .then(res => {
                console.log("worked")

                history.push("/login")

            })
            .catch((err) => {

                alert("user already exists")

            })
    }



    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                let registerData = JSON.stringify(values)
                register(registerData)
            }} >
            <div className="reg_from">
                <h1 className='regname'>Registeration Form</h1>
                <Form >
                    <div className="register">
                        <label htmlFor="FirstName">FirstName</label>
                        <Field type="text" name="FirstName" className="Form-control" id="FirstName" placehodler="Enter Your FirstName" />
                        <ErrorMessage name="FirstName">
                            {errorMsg => <div className="text-danger">{errorMsg}</div>}
                        </ErrorMessage>

                        <label htmlFor="LastName">LastName</label>
                        <Field type="text" name="LastName" className="Form-control" id="LastName" placehodler="Enter Your FirstName" />
                        <ErrorMessage name="LastName">
                            {errorMsg => <div className="text-danger">{errorMsg}</div>}
                        </ErrorMessage>
                        <label htmlFor="username">username</label>
                        <Field type="text" name="username" className="Form-control" id="username" placehodler="Enter Your FirstName" />
                        <ErrorMessage name="username">
                            {errorMsg => <div className="text-danger">{errorMsg}</div>}
                        </ErrorMessage>
                        <label htmlFor="email">email</label>
                        <Field type="text" name="email" className="Form-control" id="email" placehodler="Enter Your FirstName" />
                        <ErrorMessage name="email">
                            {errorMsg => <div className="text-danger">{errorMsg}</div>}
                        </ErrorMessage>
                        <label htmlFor="password">password</label>
                        <Field type="password" name="password" className="Form-control" id="password" placehodler="Enter Your FirstName" />
                        <ErrorMessage name="password">
                            {errorMsg => <div className="text-danger">{errorMsg}</div>}
                        </ErrorMessage>
                        <label htmlFor="confirmPassword">confirmPassword</label>
                        <Field type="password" name="confirmPassword" className="Form-control" id="confirmPassword" placehodler="Enter Your FirstName" />
                        <ErrorMessage name="confirmPassword">
                            {errorMsg => <div className="text-danger">{errorMsg}</div>}
                        </ErrorMessage>
                        <button type="submit" className="button">Submit</button>
                    </div>

                </Form>

            </div>
        </Formik >
    )
}
export default Registration
















