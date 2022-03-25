import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import parser from "socket.io-msgpack-parser"
/*https://chatservershernows.herokuapp.com/*/
/*http://localhost:8000*/


var socket = io.connect("https://chatservershernows.herokuapp.com/",{transports: ['websocket'], parser},()=>{
    console.log("conectado")
});

export const SocketContext = createContext()

export function SocketProvider({children}) {

    const sendMessage = (user,message) => {
        socket.emit("message",{author: socket.id, user: user ,message: message})
    }

    const typing = () => {
        socket.emit("typing")
    }
    return(
        <SocketContext.Provider value={{socket, sendMessage, typing}}>
            {children}
        </SocketContext.Provider>
    )
}
