import { useCallback, useContext, useState } from "react"
import { SocketContext } from "../contexts/contextsocket"
import styles from "../styles/Chat.module.css"

function Inputs(){
    const [user, setUser] = useState("")
    const [message, setMessage] = useState("")

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

    return(
        <>
            <input className={styles.name} type="text" onChange={(e)=>handleUser(e)} placeholder="nome"/>
            <input className={styles.message} type="text" value={message} onChange={(e)=>handleMessage(e)} placeholder="mensagem"/>
            <button className={styles.send} onClick={(e)=>{sendmessage()}}>Enviar</button>
        </>
    )
}
export default Inputs