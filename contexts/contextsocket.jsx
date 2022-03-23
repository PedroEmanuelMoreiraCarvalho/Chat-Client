import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import parser from "socket.io-msgpack-parser"
/*https://chatservershernows.herokuapp.com/*/


var socket = io.connect("http://localhost:8000",{transports: ['websocket'], parser},()=>{
    console.log("conectado")
});

export const SocketContext = createContext()

export function SocketProvider({children}) {

    const sendMessage = (user,message) => {
        socket.emit("message",{author: socket.id, user: user ,message: message})
    }
    return(
        <SocketContext.Provider value={{socket, sendMessage}}>
            {children}
        </SocketContext.Provider>
    )
}