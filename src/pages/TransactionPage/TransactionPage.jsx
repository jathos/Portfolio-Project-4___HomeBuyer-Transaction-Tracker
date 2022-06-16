import { useEffect } from 'react';
import TransactionList from '../../components/TransactionList/TransactionList';
import NewTransactionForm from '../../components/NewTransactionForm/NewTransactionForm';
// import TransactionDetail from '../TransactionDetail/TransactionDetail';
// import * as transactionsAPI from '../../utilities/transaction-api'
// import * as usersAPI from '../../utilities/users-api'

function TransactionPage({ user, transactions, showForm, setShowForm, usersRef, setRerender }) {

    // const [showForm, setShowForm] = useState(false)
    // const [transactions, setTransactions] = useState([])
    // const usersRef = useRef([]);

    // useEffect(function () {
    //     async function getTransactions() {
    //         const allTransactions = await transactionsAPI.getAll();
    //         setTransactions(allTransactions);
    //     };
    //     getTransactions();
    // }, [showForm]);

    // useEffect(function () {
    //     async function getAllUsers() {
    //         const allUsers = await usersAPI.getAll();
    //         usersRef.current = allUsers
    //     };
    //     getAllUsers();
    // }, []);

    return (
        <div>
            {user.isAdmin ? <>
                <h1>Transaction Page</h1>
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