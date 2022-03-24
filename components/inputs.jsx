import { useCallback, useContext, useState } from "react"
import { SocketContext } from "../contexts/contextsocket"
import styles from "../styles/Chat.module.css"

function Inputs(){
    const [user, setUser] = useState("")
    const [message, setMessage] = useState("")
    const [warning, setWarning] = useState("")

    const { sendMessage } = useContext(SocketContext)

    const sendmessage = (e) =>{
        e.preventDefault()
        if(user.trim()==""){setWarning("digite um nome");return}
        if(message.trim()==""){setWarning("digite uma mensagem para enviar");setMessage("");return}
        sendMessage(user,message)
        setMessage("")
        setWarning("")
    }

    function handleMessage(e){
        setMessage(e.target.value)
    }

    function handleUser(e){
        setUser(e.target.value)
    }

    return(
        <form className={styles.inputs} onSubmit={(e)=>{sendmessage(e)}}>
            {warning ? <div className={styles.warning}>
                {warning}<button onClick={(e)=>{setWarning("")}}>x</button>
            </div> : null}
            <input className={styles.name} type="text" value={user} onChange={(e)=>handleUser(e)} placeholder="nome"/>
            <input className={styles.message} type="text" value={message} onChange={(e)=>handleMessage(e)} placeholder="mensagem"/>
            <button className={styles.send} type="submit">Enviar</button>
        </form>
    )
}
export default Inputs