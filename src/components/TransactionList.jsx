import TransactionItem from "./TransactionItem";

function TransactionList({ transactions }) {
    return (
        <div>
            <h1>Transaction List</h1>
            {transactions.map((ele, idx) => <TransactionItem transaction={ele} key={idx} />)}
        </div>
    );
};

export default TransactionList;