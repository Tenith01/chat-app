import React from "react";
import messages from "./Messages";

const Message = () => {
    return (<div className='message owner'>
            <div className={'messageInfo'}>
                <img
                    src={'https://images.pexels.com/photos/15114576/pexels-photo-15114576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                    alt={''}
                />
                <span>just now</span>
            </div>
            <div className={"messageContent"}>
                <p>hello</p>
                <img
                    src={"https://images.pexels.com/photos/14446269/pexels-photo-14446269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    alt={""}
                />
            </div>
        </div>)
}

export default Message;