import { useContext, useEffect, useRef, useState } from "react"
import { SocketContext, useMessages } from "../contexts/contextsocket"
import Message from "./message"
import ServerMessage from "./server_message"

function Chat(){
    const { socket } = useContext(SocketContext)
    const [mensagens, setMessages] = useState([])
    const chat = useRef(null)
    socket.on("updateMessages",(data)=>{
        setMessages(data)
    })

    const AlwaysScrollToBottom = () => {
        const elementRef = useRef(chat);
        useEffect(() => elementRef.current.scrollIntoView());
        return <div ref={elementRef} />;
    };
      

    return(
        <div ref={chat}>
            {mensagens && mensagens.map((e,key)=>{
                return(e.author == 1 ? 
                <ServerMessage key={key} message={e} author={socket.id}></ServerMessage> :
                <Message key={key} message={e} author={socket.id}></Message>
                )
            })}
            <AlwaysScrollToBottom/>
        </div>
    )

}

export default Chat