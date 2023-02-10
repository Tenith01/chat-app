import React from "react";
import Add from "../img/addAvatar.png"

const Login = () =>{
    return(
        <div className={'formContainer'}>
            <div className={'formWrapper'}>
                <samp className="logo">Lama Chat</samp>
                <samp className="title">Register</samp>
                <form>
                    <input type={"email"} placeholder={"email"}/>
                    <input type={"password"} placeholder={"password"}/>
                    <input style={{display:"none"}} type={"file"} id={"file"}/>
                    <button>Sign in</button>
                </form>
                <p>You don't have an account ? Login</p>
            </div>
        </div>
    )
}

export default Login;