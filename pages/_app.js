import { SocketProvider } from "../contexts/contextsocket"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <SocketProvider>
      <Component {...pageProps}/>
    </SocketProvider>
  )
}

export default MyApp