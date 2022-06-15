import './TransactionItem.css'

function TransactionItem({ transaction, allUsers }) {
    return (
        <div className="TransactionItem">
            {transaction.street}<br></br>
            {transaction.address}
            <form>
                <select type="select">
                    {allUsers.map(ele => <option>{ele.name}</option>)}
                </select>
            </form>
            <button>View Details</button>
        </div>
    );
};

export default TransactionItem;