import { useContext, useEffect, useState } from "react"
import { SocketContext, useMessages } from "../contexts/contextsocket"
import Message from "./message"
import ServerMessage from "./server_message"

function Chat(){
    const { socket } = useContext(SocketContext)
    const [mensagens, setMessages] = useState([])

    socket.on("updateMessages",(data)=>{
        setMessages(data)
    })

    return(
        <div>
            {mensagens && mensagens.map((e,key)=>{
                return(e.author == 1 ? 
                <ServerMessage key={key} message={e} author={socket.id}></ServerMessage> :
                <Message key={key} message={e} author={socket.id}></Message>
                )
            })}
        </div>
    )

}

export default Chat