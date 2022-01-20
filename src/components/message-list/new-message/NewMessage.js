import React from "react"
import styles from './NewMessage.module.css'

export const NewMessage = props => {

  return (
    <form
      className={styles.NewMessage}
      onSubmit={props.onSubmit}
    >
      <input
        placeholder='Написать сообщение...'
        type="text"
        onChange={props.onChangeInput}
        value={props.value}
      />
      <button>Отправить</button>
    </form>
  )
}