import React from "react";

const Chats = () => {
    return (
        <div className={"chats"}>
            <div className={"userChat"}>
                <img
                    src={"https://images.pexels.com/photos/15114576/pexels-photo-15114576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    alt={""}
                />
                <div className={"userChatInfo"}>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chats;