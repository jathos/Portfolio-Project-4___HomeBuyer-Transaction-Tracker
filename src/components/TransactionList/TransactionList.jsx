import TransactionItem from "../TransactionItem/TransactionItem";
import './TransactionList.css'

function TransactionList({ transactions, allUsers, setRerender }) {

    return (
        <>
            <h1>Transaction List</h1>
            <div className="TransactionList">

                {transactions.map((ele, idx) => <TransactionItem transaction={ele} allUsers={allUsers} key={idx} id={idx} setRerender={setRerender} />)}
            </div>
        </>
    );
};

export default TransactionList;