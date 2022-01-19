import React from "react";
import styles from './Message.module.css'

export const Message = (props) => {
    return <div className={styles.Message}>
        <p>{props.text}</p>
    </div>
}