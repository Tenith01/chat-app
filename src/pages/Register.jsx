import React from "react";
import Add from "../img/addAvatar.png"

const Register = () =>{
    return(
        <div className={'formContainer'}>
            <div className={'formWrapper'}>
                <samp className="logo">Lama Chat</samp>
                <samp className="title">Register</samp>
                <form>
                    <input type={"text"} placeholder={"display-name"}/>
                    <input type={"email"} placeholder={"email"}/>
                    <input type={"password"} placeholder={"password"}/>
                    <input style={{display:"none"}} type={"file"} id={"file"}/>
                    <label htmlFor={"file"}>
                        <img src={Add} alt={""}/>
                        <samp>Add an avatar</samp>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account ? Login</p>
            </div>
        </div>
    )
}

export default Register;