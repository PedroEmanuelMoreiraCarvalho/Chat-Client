import styles from "../styles/Message.module.css"

function ServerMessage(props){
    return(
        <div className={styles.message_from_server}>{props.message.message}<br/></div>
    )
}

export default ServerMessage