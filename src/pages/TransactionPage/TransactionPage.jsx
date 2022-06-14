import { useState, useEffect } from 'react';
import NewTransactionForm from '../../components/NewTransactionForm/NewTransactionForm';

function TransactionPage({ user }) {

    const [showForm, setShowForm] = useState(false)

    return (
        <div>
            <h1>Transaction Page</h1>
            <h1>{user.name}</h1>
            <h1>{user.isAdmin ? "is admin" : "is NOT Admin"}</h1>
            {showForm ? <NewTransactionForm /> : <button onClick={() => setShowForm(true)}>Add New Transaction</button>}
        </div>
    );
};

export default TransactionPage;