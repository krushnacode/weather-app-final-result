// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import * as Yup from 'yup'


// const initialValues = {
//     name: "",
//     email: "",
//     password: ""
// }

// const onSubmit = values => {
//     console.log("form_data", values)
// }

// const validationSchema = Yup.object({
//     name: Yup.string().min(3).max(25).required('Required!'),
//     email: Yup.string().email('Invalid Email Address!').required('Required!'),
//     password: Yup.string().min(5).max(10).required('Required!')
// })

// function Registration(props) {

//     return (
//         <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}
//         >
//             <div className="reg_form">

//                 <h1>Registration</h1>

//                 <Form>
//                     <div className="form-group">

//                         <label htmlFor="exampleInputEmail1">Name</label>
//                         <Field type="text" name="name"
//                             className="form-control" id="exampleInputName1" placeholder="Enter Name" />

//                         <ErrorMessage name='name' >
//                             {errorMsg => <div className="text-danger">{errorMsg}</div>}
//                         </ErrorMessage>
//                     </div>
//                     <div className="form-group">

//                         <label htmlFor="exampleInputEmail1">Email address</label>
//                         <Field type="email" name="email"
//                             className="form-control" id="exampleInputEmail1" placeholder="Enter email" />

//                         <ErrorMessage name='email'>
//                             {errorMsg => <div className="text-danger">{errorMsg}</div>}
//                         </ErrorMessage>
//                     </div>
//                     <div className="form-group">

//                         <label htmlFor="exampleInputPassword1">Password</label>
//                         <Field type="password" name="password"
//                             className="form-control" id="exampleInputPassword1" placeholder="Password" />

//                         <ErrorMessage name='password' >
//                             {errorMsg => <div className="text-danger">{errorMsg}</div>}
//                         </ErrorMessage>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </Form>
//             </div>
//         </Formik>
//     );
// }

// export default Registration;

// import React, { useState } from 'react'
// import "./register.css"
// import axios from "axios"
// import { useHistory } from 'react-router-dom'
// import { Formik, Form, useFormik, FormikControl } from 'formik';
// import { TextField } from './TextField';
// import * as Yup from 'yup';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
// import { Route } from 'react-router';

// const Register = () => {
//     const notify = () => {
//         toast("welcome to the family")
//     }
//     const LoginToast = () => {
//         toast("Welcome Page")
//     }
//     const history = useHistory()
//     const validate = Yup.object({
//         FirstName: Yup.string()
//             .max(15, 'Must be 15 characters or less')
//             .required('First Name Required!!!'),
//         // .toast("First Name is Required!!!"),
//         LastName: Yup.string()
//             .max(20, 'Must be 20 characters or less')
//             .required('LastName is required'),
//         username: Yup.string()
//             .max(20, 'Must be 20 characters or less')
//             .required('username is required'),
//         email: Yup.string()
//             .email('Email is invalid')
//             .required('Email is required'),
//         password: Yup.string()
//             .min(6, 'Password must be at least 6 charaters')
//             .required('Password is required'),
//         confirmPassword: Yup.string()
//             .oneOf([Yup.ref('password'), null], 'Password must match')
//             .required('Confirm password is required')
//     })
//     const [formik, setUser] = useState({
//         FirstName: '',
//         LastName: '',
//         username: '',
//         email: '',
//         password: '',
//         confirmpassword: ''
// })
// const formik = useFormik({
//     FirstName: '',
//     LastName: '',
//     username: '',
//     email: '',
//     password: '',
//     confirmpassword: ''
// })

// const handleChange = e => {
//     const { name, value } = e.target
//     setUser({
//         ...formik,
//         [name]: value
//     })
// }
// const handleSubmit = async event => {
//     event.preventDefault();
//     const { email } = this.state;

//     const response = await register(email);
//     const responseJson = await response.json()

//     if (response.status !== 409) {
//         this.setState({ error: responseJson.error })
//     } else {
//         // handles successfull registration
//         console.log("User registered")
//     }
// }


// const register = () => {
//     const { FirstName, LastName, username, email, password, confirmpassword } = formik
//         if (FirstName && LastName && username && email && password && (password === confirmpassword)) {
//             axios.post("http://localhost:4000/app/signup", formik)
//                 .then(res => {
//                     // alert(res.data.message)
//                     history.push("/login")
//                 })
//         } else {
//             // alert("invalid input")
//         }

//     }

//     return (
//         < Formik
//             initialValues={{
//                 formik
//             }}
//             validationSchema={validate}
//             onSubmit={values => {
//                 console.log(values)
//             }}
//         >

//             {formik => (


//                 <div>
//                     {/* {console.log("User", user)} */}
//                     <Form className='register'>
//                         <h1>Register</h1>
//                         <TextField label="First Name" type="text" name="FirstName" value={formik.FirstName} placeholder="Provide FirstName" onChange={handleChange}></TextField>
//                         <TextField label="Last Name" type="text" name="LastName" value={formik.LastName} placeholder="Provide LastName" onChange={handleChange}></TextField>
//                         <TextField label="username" type="text" name="username" value={formik.username} placeholder="Provide username" onChange={handleChange}></TextField>
//                         <TextField label="Email" type="text" name="email" value={formik.email} placeholder="Provide Your Email" onChange={handleChange}></TextField>
//                         <TextField label="password" type="password" name="password" value={formik.password} placeholder="Provide your Password" onChange={handleChange}></TextField>
//                         <TextField label="Confirm Password" type="password" name="confirmpassword" value={formik.confirmpassword} placeholder="Re-enter Password" onChange={handleChange}></TextField>
//                         <div className="button" onClick={() => {
//                             register();
//                             notify();
//                         }} >Register
//                             <ToastContainer /></div>
//                         <div>or</div>
//                         <div className="button" onClick={() => {
//                             LoginToast()
//                             history.push("/login")
//                         }}>Login <ToastContainer /></div>
//                     </Form>
//                 </div >
//             )
//             }
//         </Formik >
//     )
// }

// export default Register



// import React, { useState } from "react"
// import "./register.css"
// import axios from "axios"
// import { useHistory } from "react-router-dom"
// import { Formik } from "formik"
// import { ToastContainer, toast } from "react-toastify"
// import * as Yup from 'yup'
// import 'react-toastify/dist/ReactToastify.css'

// const Register = () => {
//     const notify = () => {
//         toast("WELCOME TO THE SERVER")
//     }
//     const history = useHistory()

//     const [user, setUser] = useState({
//         FirstName: "",
//         LastName: "",
//         username: "",
//         email: "",
//         password: "",
//         confirmpassword: ""
//     })
//     const validationSchema = Yup.object({
//         FirstName: Yup.string()
//             .max(15, 'Must be 15 characters or less')
//             .required("FirstName is required"),
//         // .toast("First Name is Required!!!"),
//         LastName: Yup.string()
//             .max(20, 'Must be 20 characters or less')
//             .required('LastName is required'),
//         username: Yup.string()
//             .max(20, 'Must be 20 characters or less')
//             .required('username is required'),
//         email: Yup.string()
//             .email('Email is invalid')
//             .required('Email is required'),
//         password: Yup.string()
//             .min(6, 'Password must be at least 6 charaters')
//             .required('Password is required'),
//         confirmPassword: Yup.string()
//             .oneOf([Yup.ref('password'), null], 'Password must match')
//             .required('Confirm password is required')
//     }).defined()
//     const handleChange = event => {
//         const { name, value } = event.target
//         event.preventDefault()
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const register = () => {
//         const { FirstName, LastName, username, email, password, confirmpassword } = user
//         if (FirstName && LastName && username && email && (password === confirmpassword)) {
//             axios.post("http://localhost:4000/app/signup", user)
//                 .then(res => {
//                     alert(res.data.message)
//                     history.push("/login")
//                 })
//         } else {
//             alert("invlid input")
//         }

//     }

//     return (
//         <div className="register">
//             {/* {console.log("User", user)} */}
//             <h1>Register</h1>
//             <input type="text" name="FirstName" value={user.FirstName} placeholder="Your Name" onChange={handleChange}></input>
//             <input type="text" name="LastName" value={user.LastName} placeholder="Your Name" onChange={handleChange}></input>
//             <input type="text" name="username" value={user.username} placeholder="Your Name" onChange={handleChange}></input>
//             <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
//             <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
//             <input type="password" name="confirmpassword" value={user.confirmpassword} placeholder="Re-enter Password" onChange={handleChange}></input>
//             <div className="button" onClick={() => {
//                 notify();
//                 register();
//             }} >Register<ToastContainer /></div>
//             <div>or</div>
//             <div className="button" onClick={() => history.push("/login")}>Login</div>
//         </div>
//     )
// }

// export default Register




import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 20) {
        errors.username = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length > 6) {
        errors.password = 'Must be 6 characters or less';
    }

    return errors;
};

const Register = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',

        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
            <label htmlFor="username">username Name</label>
            <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
            />
            {formik.errors.username ? <div>{formik.errors.username}</div> : null}
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <label htmlFor="password">password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}

            <button type="submit">Submit</button>
        </form>
    );
};

export default Register

