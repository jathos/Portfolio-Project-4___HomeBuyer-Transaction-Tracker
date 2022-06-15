import TransactionItem from "../TransactionItem/TransactionItem";
import './TransactionList.css'

function TransactionList({ transactions, allUsers }) {
    console.log(allUsers)

    return (
        <>
            <h1>Transaction List</h1>
            <div className="TransactionList">

                {transactions.map((ele, idx) => <TransactionItem transaction={ele} allUsers={allUsers} key={idx} />)}
            </div>
        </>
    );
};

export default TransactionList;