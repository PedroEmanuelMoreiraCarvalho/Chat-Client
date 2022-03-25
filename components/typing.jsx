import React, { useContext, useState } from "react"
import { SocketContext } from "../contexts/contextsocket"
import styles from "../styles/Topbar.module.css"

function Typing(){
    const { socket } = useContext(SocketContext)
    const [user_typing, setUserTyping] = useState("")
    const [typing, setTyping] = useState("")

    socket.once("someoneTyping",(user)=>{
        setUserTyping(user.user)
        setTyping(`${user_typing} está digitando...`)
        setTimeout(() => {
            setTyping("")
        }, 2000);
    })
    return(
        <div>
            {typing ? <div className={styles.typing}>{typing}</div> : <br/>}
        </div>
    )
}

export default Typing