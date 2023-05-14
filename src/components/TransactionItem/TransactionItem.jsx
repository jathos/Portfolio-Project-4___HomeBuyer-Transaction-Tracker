import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as transactionsAPI from '../../utilities/transaction-api';
import './TransactionItem.css';

function TransactionItem({ transaction, allUsers, id, setRerender }) {

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