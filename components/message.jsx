import styles from "../styles/Message.module.css"

function Message(props){
    return(
        props.author === props.message.author ?
        <div className={styles.message_from_me}><div>você: {props.message.message}<br/></div></div>
        :
        <div className={styles.message}>{props.message.user}: {props.message.message}<br/></div>
    )
}

export default Message