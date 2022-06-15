import { useState, useEffect } from 'react';
import TransactionList from '../../components/TransactionList';
import NewTransactionForm from '../../components/NewTransactionForm/NewTransactionForm';
import * as transactionsAPI from '../../utilities/transaction-api'

function TransactionPage({ user }) {

    const [showForm, setShowForm] = useState(false)
    const [transactions, setTransactions] = useState([])

    useEffect(function () {
        async function getTransactions() {
            const allTransactions = await transactionsAPI.getAll();
            setTransactions(allTransactions);
        };
        getTransactions();
    });

    return (
        <div>
            <h1>Transaction Page</h1>
            <h1>{user.name}</h1>
            <h1>{user.isAdmin ? "is admin" : "is NOT Admin"}</h1>
            {showForm ? <NewTransactionForm setShowForm={setShowForm} /> : <button onClick={() => setShowForm(true)}>Add New Transaction</button>}
            <TransactionList transactions={transactions} />
        </div>
    );
};

export default TransactionPage;