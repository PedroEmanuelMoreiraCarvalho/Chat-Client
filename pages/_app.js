import { SocketProvider } from "../contexts/contextsocket"


function MyApp({ Component, pageProps }) {
  return(
    <SocketProvider>
      <Component {...pageProps} />
    </SocketProvider>
  )
}

export default MyApp