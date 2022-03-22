import { io } from "socket.io-client";
import react, { useEffect, useRef, useState } from "react"
import Message from "../components/message";
import styles from "../styles/Chat.module.css"

const socket = io("https://chatservershernows.herokuapp.com/",{transports: ['websocket']});

export default function Home() {
  const [user, setUser] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const chat_messages = useRef(null)

  function sendMessage(){
    socket.emit('message',{author: socket.id, user: user ,message: message})
  }

  socket.on('updateMessages',(data)=>{
    setMessages([...messages,data])
  })

  function handleMessage(e){
    setMessage(e.target.value)
  }

  function handleUser(e){
    setUser(e.target.value)
  }

  return (
    <div>
      <div className={styles.chat}>
        <div>{socket.id}</div>
        <div className={styles.messages} ref={chat_messages}>
          {messages.map((e,key)=>{
            return(<Message key={key} message={e} author={socket.id}></Message>)
          })}
        </div>
        <input type="text" onChange={(e)=>handleUser(e)} placeholder="nome"/>
        <br/>
        <input type="text" onChange={(e)=>handleMessage(e)} placeholder="mensagem"/>
        <button onClick={(e)=>{sendMessage()}}>Enviar</button>
      </div>
    </div>
  )
}
