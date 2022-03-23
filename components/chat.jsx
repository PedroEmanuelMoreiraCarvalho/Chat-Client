import { useContext, useEffect, useState } from "react"
import { SocketContext, useMessages } from "../contexts/contextsocket"
import Message from "./message"

const server_messages = []

function Chat(){
    const { socket } = useContext(SocketContext)
    const [mensagens, setMessages] = useState([])

    socket.on("updateMessages",(data)=>{
        setMessages(data)
        socket.emit('listened')
    })

    return(
        <div>
            {mensagens && mensagens.map((e,key)=>{
                return(<Message key={key} message={e} author={socket.id}></Message>)
            })}
        </div>
    )

}

export default Chat