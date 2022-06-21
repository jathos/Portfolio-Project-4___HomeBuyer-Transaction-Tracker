import { useEffect } from 'react';
import TransactionList from '../../components/TransactionList/TransactionList';
import NewTransactionForm from '../../components/NewTransactionForm/NewTransactionForm';
// import TransactionDetail from '../TransactionDetail/TransactionDetail';
// import * as transactionsAPI from '../../utilities/transaction-api'
// import * as usersAPI from '../../utilities/users-api'

function TransactionPage({ user, transactions, showForm, setShowForm, usersRef, setRerender }) {

    return (
        <div>
            <h1>Your Open Transactions</h1>
            {user.isAdmin ? <>
                {showForm ? <NewTransactionForm setShowForm={setShowForm} /> : <button onClick={() => setShowForm(true)}>Add New Transaction</button>}
                <TransactionList transactions={transactions} allUsers={usersRef.current} setRerender={setRerender} />
            </>
                :
                <>
                    <TransactionList transactions={transactions} />
                </>
            }
        </div>
    );
};

export default TransactionPage;