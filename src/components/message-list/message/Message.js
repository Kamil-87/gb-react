import React from "react";
import styles from './Message.module.css'

export const Message = message => {
  const {author, text} = message

  console.log('props', message)

  return (
    <div className={styles.Message}>
      <p>{author}</p>
      <p>{text}</p>
    </div>
  )
}