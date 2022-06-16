import { Link } from 'react-router-dom';
import './TransactionItem.css';

function TransactionItem({ transaction, allUsers, id }) {

    async function assignUser() {

    }

    return (
        <>
            <div className="TransactionItem">
                {transaction.street}<br></br>
                {transaction.address}
                <form>
                    <select type="select">
                        {allUsers.map(ele => <option>{ele.name}</option>)}
                    </select>
                </form>
                <div className="buttonWrapper">
                    <button onClick={assignUser}>Assign User</button>
                    <Link to={`/transactions/${id}`}><button>View Details</button></Link>
                </div>
            </div>
        </>
    );
};

export default TransactionItem;