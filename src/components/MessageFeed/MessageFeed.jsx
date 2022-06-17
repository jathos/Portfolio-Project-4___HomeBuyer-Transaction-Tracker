import { useState } from 'react';
import MessageItem from '../MessageItem/MessageItem';
import * as transactionsAPI from '../../utilities/transaction-api'

function MessageFeed({ taskID, transactionID }) {

    const [messageFormData, setMessageFormData] = useState("")
    const [messages, setMessages] = useState([]);

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
        setMessages([...messages, newMessage]);
    }

    return (
        <div>
            <h4>Messages</h4>
            <form onSubmit={handleMessageSubmit}>
                <textarea rows="3" name="body" onChange={handleChange}></textarea>
                {messageFormData}
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default MessageFeed;