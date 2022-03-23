import react, { useCallback, useContext, useRef, useState } from "react"
import Chat from "../components/chat";
import Inputs from "../components/inputs";
import Message from "../components/message";
import { SocketContext } from "../contexts/contextsocket";
import styles from "../styles/Chat.module.css"

export default function Home() {
  const chat_messages = useRef(null)
  const [online_users, setOnlineUsers] = useState(1)
  const { socket } = useContext(SocketContext)

  socket.on("updateOnlineUsers",(connections)=>{
    setOnlineUsers(connections)
  })
  return (
    <div>
      <div>{online_users} usários online</div>
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
