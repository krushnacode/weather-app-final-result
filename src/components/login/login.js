import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Login = ({ setLoginUser }) => {
    const registerdata = () => {
        toast("Plase Register data")
    }
    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:4000/app/login", user)
            .then(res => {
                console.log(res.data.message)

                if (res.data.status === 200) {
                    toast.success(res.data.message)
                    history.push("/weather")
                } else {

                    toast.error(res.data.message)
                }
                console.log("bro", res)
            })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
            <div className="button" onClick={() => {
                login()
            }}>Login <ToastContainer /></div>
            <div>or</div>
            <div className="button" onClick={() => {
                registerdata()
                history.push("/register")
            }}>Register<ToastContainer /></div>
        </div>
    )
}

export default Login

