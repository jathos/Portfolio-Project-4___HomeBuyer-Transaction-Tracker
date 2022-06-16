import TransactionItem from "../TransactionItem/TransactionItem";
import './TransactionList.css'

function TransactionList({ transactions, allUsers }) {

    return (
        <>
            <h1>Transaction List</h1>
            <div className="TransactionList">

                {transactions.map((ele, idx) => <TransactionItem transaction={ele} allUsers={allUsers} key={idx} id={idx} />)}
            </div>
        </>
    );
};

export default TransactionList;