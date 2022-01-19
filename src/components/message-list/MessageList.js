import {useEffect, useState} from "react";

import styles from './MessageList.module.css'
// import {Message} from "./message";

export const MessageList = () => {
  const [messageList, setMessages] = useState([])
  const [value, setValue] = useState('')

  const sendMessage = (author, text) => {
    const newMessageList = [...messageList]
    const newMessage = {
      author,
      text
    }

    newMessageList.push(newMessage)
    setMessages(newMessageList)
  }

  const resetForm = () => {
    setValue('')
  }

  const onSubmitMessage = event => {
    event.preventDefault()
    sendMessage('user', value)
    resetForm()
  }

  const onChangeMessageInput = event => {
    setValue(event.target.value)
  }

  useEffect(() => {
    if (messageList.length === 0) {
      return
    }

    const tail = messageList[messageList.length - 1]
    if (tail.author === 'bot') {
      return
    }

    if (tail.author === 'user') {
      setTimeout(() => {
       sendMessage('bot', 'Не приставай ко мне')
      }, 1500)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageList])

  return (
    <div>
      <form
        className={styles.Form}
        onSubmit={onSubmitMessage}
      >
        <input
          placeholder='Написать сообщение...'
          type="text"
          onChange={onChangeMessageInput}
          value={value}
        />
        <button>Отправить</button>
      </form>

      <div className={styles.MessageList}>
        {
          messageList.map((message, index) => (
            <p key={index}>
              {message.author} - {message.text}
            </p>
          ))
        }
      </div>

    </div>
  )
}