import React from "react";
import styles from './Message.module.css'

export const Message = props => {
  const {author, text} = props.message

  return (
    <li className={styles.Message}>
      {author} - {text}
    </li>
  )
}
