import { useEffect } from 'react';
import TransactionList from '../../components/TransactionList/TransactionList';
import NewTransactionForm from '../../components/NewTransactionForm/NewTransactionForm';
import Header from '../../components/Header/Header';
import './TransactionPage.css';
// import TransactionDetail from '../TransactionDetail/TransactionDetail';
// import * as transactionsAPI from '../../utilities/transaction-api'
// import * as usersAPI from '../../utilities/users-api'

function TransactionPage({ user, transactions, showForm, setShowForm, usersRef, setRerender, setUser }) {

    return (
        <>
            <Header user={user} setUser={setUser}></Header>
            <div className="transactions-main">
                <h1 className="transaction-page-title">YOUR ACTIVE ESCROWS</h1>
                {user.isAdmin ? <>
                    {showForm ? <NewTransactionForm setShowForm={setShowForm} /> : <button className="addNewTransactionButton" onClick={() => setShowForm(true)}>Add New Transaction</button>}
                    <TransactionList transactions={transactions} allUsers={usersRef.current} setRerender={setRerender} />
                </>
                    :
                    <>
                        <TransactionList transactions={transactions} />
                    </>
                }
            </div>
        </>
    );
};

export default TransactionPage;