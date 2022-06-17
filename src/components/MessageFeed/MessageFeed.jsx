import { useState } from 'react';
import MessageItem from '../MessageItem/MessageItem';
import * as transactionsAPI from '../../utilities/transaction-api'

function MessageFeed() {

    const [messageFormData, setMessageFormData] = useState("")
    const [messages, setMessages] = useState([]);

    function handleChange(evt) {
        const newState = { ...messageFormData, [evt.target.name]: evt.target.value }
        setMessageFormData(newState)
    }

    async function handleMessageSubmit(evt) {
        evt.preventDefault();
        const newMessage = await transactionsAPI.createMessage(messageFormData);
        setMessages([...messages, newMessage]);
    }

    return (
        <div>
            <h4>Messages</h4>
            <form onSubmit={handleMessageSubmit}>
                <textarea rows="3" name="body" onChange={handleChange}></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default MessageFeed;