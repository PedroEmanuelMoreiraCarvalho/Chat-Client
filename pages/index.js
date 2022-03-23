import react, { useCallback, useContext, useRef, useState } from "react"
import Chat from "../components/chat";
import Inputs from "../components/inputs";
import Message from "../components/message";
import { SocketContext } from "../contexts/contextsocket";
import styles from "../styles/Chat.module.css"

export default function Home() {
  const [user, setUser] = useState("")
  const [message, setMessage] = useState("")
  const chat_messages = useRef(null)
  const { socket, sendMessage } = useContext(SocketContext)

  const sendmessage = useCallback(()=>{
    sendMessage(user,message)
    setMessage("")
  },[message])

  function handleMessage(e){
    setMessage(e.target.value)
  }

  function handleUser(e){
    setUser(e.target.value)
  }

  return (
    <div>
      <div className={styles.chat}>
        <div className={styles.messages} ref={chat_messages}>
          <Chat/>
        </div>
        <div className={styles.inputs}>
          <Inputs/>
        </div>
      </div>
    </div>
  )
}
