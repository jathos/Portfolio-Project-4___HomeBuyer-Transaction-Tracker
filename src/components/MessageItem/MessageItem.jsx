function MessageItem({ message }) {
    return (
        <>
            {(message.recipient == "Agent") ?
                < div className="messageRight">
                    <h5>Client</h5>
                    <p>{message.body}</p>
                </div >
                :
                <div className="messageLeft">
                    <h5>Agent</h5>
                    <p>{message.body}</p>
                </div>
            }
        </>
    );
};

export default MessageItem;