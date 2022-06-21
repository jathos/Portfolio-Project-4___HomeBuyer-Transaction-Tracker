import TransactionItem from "../TransactionItem/TransactionItem";
import './TransactionList.css'

function TransactionList({ transactions, allUsers, setRerender }) {

    return (
        <>
            <div className="TransactionList">
                {transactions.length > 0 ?
                    transactions.map((ele, idx) => <TransactionItem transaction={ele} allUsers={allUsers} key={transactions[idx]._id} id={idx} setRerender={setRerender} />)
                    :
                    <h3 className="noTransactions">Ask your Agent to assign you to a transaction</h3>
                }
            </div>
        </>
    );
};

export default TransactionList;