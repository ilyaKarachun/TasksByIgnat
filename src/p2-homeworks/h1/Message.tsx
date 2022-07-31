import React, {FC} from 'react'

import classes from "./Message.module.css";

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message: FC<MessageType> = (props) => {
    return (
        <div className={classes.message}>
            <img className={classes.message__img} src={props.avatar}/>
            <div className={classes.message__dialog}>
                <h1>{props.name}</h1>
                <div>{props.message}</div>
            </div>
            <data>{props.time}</data>

        </div>
    )
}

export default Message
