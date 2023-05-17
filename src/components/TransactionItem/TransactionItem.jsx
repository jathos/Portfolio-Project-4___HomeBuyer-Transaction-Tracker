import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as transactionsAPI from '../../utilities/transaction-api';
import EscrowCounter from '../EscrowCounter/EscrowCounter';
import TaskHQ from '../TaskHQ/TaskHQ';
import './TransactionItem.css';

function TransactionItem({ transaction, allUsers, id, setRerender }) {

    let taskCount = 0;
    for (let i = 0; i < transaction.tasks.length; i++) {
        if (transaction.tasks[i].isCompleted == false) {
            taskCount++
        };
    };

    let messageCount = 0;
    transaction.tasks.forEach(task => {
        task.messages.forEach(message => {
            if (message.unread == true) {
                messageCount++
            };
        });
    });

    const daysToClose = Math.round((new Date(transaction.closeDate) - new Date()) / 86400000);

    const [userSelect, setUserSelect] = useState({
        user: "",
        error: ""
    });

    const idRef = useRef(transaction._id)

    let rerender = false;

    async function assignUser(evt) {
        evt.preventDefault();
        if (userSelect.user == "") {
            setUserSelect({ error: "Please select a user" })
        } else {
            const payload = {
                user: userSelect.user,
                id: idRef.current
            };
            const update = await transactionsAPI.assignUser(payload);
            setRerender([!rerender])
        };
    };

    function handleChange(evt) {
        setUserSelect({ user: evt.target.value })
    }

    return (
        <>
            <div className="TransactionItem">
                <div className="test">
                </div>
                <div className="address">
                    <p>{transaction.street}</p>
                    <p>{transaction.address}</p>
                </div>
                <div className="transaction-item-details-wrapper">
                    <div className="transaction-item-seller-buyer">Seller: {transaction.sellerFirst}&nbsp;{transaction.sellerLast} | Buyer: {transaction.buyerFirst}&nbsp;{transaction.buyerLast}</div>
                    <div className="transaction-item-tasks-messages"><span className="transaction-item-task-count">{taskCount}</span> Incomplete Tasks <span className="transaction-item-message-count">{messageCount}</span> New Messages</div>
                </div>
                <div className="transaction-item-days-left-wrapper">
                    <div className="transaction-item-days-left-number">{daysToClose}</div>
                    <div>days to closing</div>
                </div>
                {!transaction.user ? <>
                    <form className="userSelect">
                        <select name="user" type="select" onChange={handleChange}>
                            <option value="">Select a User</option>
                            {allUsers.map(ele => <option value={ele._id}>{ele.name}</option>)}
                        </select>
                        <button type="submit" onClick={assignUser}>Assign User</button>
                    </form>
                    <p>{userSelect.error}</p>
                    <Link to={`/transactions/${id}`}><button>View Details</button></Link>
                </>
                    :

                    <Link to={`/transactions/${id}`}><button>View Details</button></Link>
                }


            </div>
        </>
    );
};

export default TransactionItem;