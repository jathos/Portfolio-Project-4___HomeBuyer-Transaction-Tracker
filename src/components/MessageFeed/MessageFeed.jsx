import { useState } from 'react';
import MessageItem from '../MessageItem/MessageItem';
import * as transactionsAPI from '../../utilities/transaction-api';
import './MessageFeed.css';

function MessageFeed({ taskID, transactionID, taskMessages, rerender, setRerender }) {

    const [messageFormData, setMessageFormData] = useState("")

    function handleChange(evt) {
        setMessageFormData(evt.target.value)
    }

    async function handleMessageSubmit(evt) {
        evt.preventDefault();
        const payload = {
            body: messageFormData,
            taskID: taskID,
            transactionID: transactionID
        };
        const newMessage = await transactionsAPI.createMessage(payload);
        setRerender(!rerender);
        setMessageFormData("");
    }

    return (
        <div className="message-feed-wrapper">
            <h4 className="message-feed-header">Messages</h4>
            {(taskMessages.length > 0) ? taskMessages.map((ele, idx) => <MessageItem message={ele} key={ele._id} />) : ""}
            <form className="messageForm" onSubmit={handleMessageSubmit}>
                <textarea rows="3" name="body" onChange={handleChange} value={messageFormData}></textarea>
                <button className="send-message-button" type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default MessageFeed;