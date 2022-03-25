import { useContext, useState } from "react"
import { SocketContext } from "../contexts/contextsocket"
import styles from "../styles/Topbar.module.css"
import Typing from "./typing"

function TopBar(){
    const [online_users, setOnlineUsers] = useState(1)
    const { socket } = useContext(SocketContext)
    
    socket.on("updateOnlineUsers",(connections)=>{
        setOnlineUsers(connections)
    })
    return(
        <div className={styles.top_bar_background}>
            <div className={styles.top_bar}>
                <div>
                    {online_users} usários online
                </div>
            </div>
            <Typing/>
        </div>
    )
}

export default TopBar