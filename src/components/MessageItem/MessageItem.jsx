import './MessageItem.css';

function MessageItem({ message }) {
    return (
        <>
            {(message.recipient == "Agent") ?
                < div className="messageRight message-wrapper">
                    <h5 className="messageRight">Client</h5>
                    <p className="messageRight">{message.body}</p>
                </div >
                :
                <div className="messageLeft message-wrapper">
                    <h5 className="messageLeft">Agent</h5>
                    <p className="messageLeft">{message.body}</p>
                </div>
            }
        </>
    );
};

export default MessageItem;