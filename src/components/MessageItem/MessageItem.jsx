import './MessageItem.css';

function MessageItem({ message }) {
    return (
        <>
            {(message.recipient == "Agent") ?
                < div className="messageRight">
                    <h5 className="messageRight">Client</h5>
                    <p className="messageRight">{message.body}</p>
                </div >
                :
                <div className="messageLeft">
                    <h5 className="messageLeft">Agent</h5>
                    <p className="messageLeft">{message.body}</p>
                </div>
            }
        </>
    );
};

export default MessageItem;