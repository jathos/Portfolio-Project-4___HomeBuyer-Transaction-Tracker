import { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as transactionsAPI from '../../utilities/transaction-api';
import './TransactionItem.css';

function TransactionItem({ transaction, allUsers, id }) {

    const [userSelect, setUserSelect] = useState({
        user: "",
        error: ""
    });

    const idRef = useRef(transaction._id)

    const history = useHistory();

    async function assignUser(evt) {
        evt.preventDefault();
        if (userSelect.user == "") {
            setUserSelect({ error: "Please select a user" })
        } else {
            const payload = {
                user: userSelect.user,
                id: idRef.current
            };
            const user = await transactionsAPI.assignUser(payload)
            history.push('/transactions')
        };
    };

    function handleChange(evt) {
        setUserSelect({ user: evt.target.value })
    }

    return (
        <>
            <div className="TransactionItem">
                {transaction.street}<br></br>
                {transaction.address}
                <form>
                    <select name="user" type="select" onChange={handleChange}>
                        <option value="">Select a User</option>
                        {allUsers.map(ele => <option value={ele._id}>{ele.name}</option>)}
                    </select>
                    <button type="submit" onClick={assignUser}>Assign User</button>
                </form>
                <p>{userSelect.error}</p>
                <Link to={`/transactions/${id}`}><button>View Details</button></Link>
            </div>
        </>
    );
};

export default TransactionItem;