import { useState } from 'react';
import { Link } from 'react-router-dom';
import './TransactionItem.css';

function TransactionItem({ transaction, allUsers, id }) {

    const [userSelect, setUserSelect] = useState({
        user: "",
        error: ""
    });

    async function assignUser(evt) {
        evt.preventDefault();
        if (userSelect.user == "") {
            setUserSelect({ error: "Please select a user" })
        } else {
            console.log("form value is: ", userSelect.user)
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
                        {allUsers.map(ele => <option value={ele.name}>{ele.name}</option>)}
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