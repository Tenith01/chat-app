import React from "react";
import cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png"


const Chat = () => {
    return (
        <div className={'chat'}>
            <div className={"chatInfo"}>
                <span>Jane</span>
                <div className={"chatIcons"}>
                    <img src={"cam"} alt={""}/>
                    <img src={"Add"} alt={""}/>
                    <img src={"More"} alt={""}/>
                </div>
            </div>
        </div>
    )
}

export default Chat;