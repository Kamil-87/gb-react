import {useCallback, useEffect, useState} from "react"

import styles from './MessageList.module.css'
import {Message} from './message'
import {NewMessage} from "./new-message/NewMessage"

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

  const resetForm = useCallback(() => {
    setValue('')
  }, [])

  const onSubmitMessage = event => {
    event.preventDefault()
    sendMessage('user', value)
    resetForm()
  }

  const onChangeMessageInput = useCallback(event => {
    setValue(event.target.value)
  }, [])

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
      <NewMessage
        onSubmit={onSubmitMessage}
        onChangeInput={onChangeMessageInput}
        value={value}
      />

      <ul className={styles.MessageList}>
        {
          messageList.map((message, index) => {
            return (
              <Message
                key={index}
                message={message}
              />
            )
          })
        }
      </ul>

    </div>
  )
}
