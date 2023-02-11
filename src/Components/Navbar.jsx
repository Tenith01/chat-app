import React from "react";

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <samp className={"logo"}>lama Chat</samp>
            <div className={"user"}>
                <img src={"https://images.pexels.com/photos/15114576/pexels-photo-15114576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={""}/>
                <span>John</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar;