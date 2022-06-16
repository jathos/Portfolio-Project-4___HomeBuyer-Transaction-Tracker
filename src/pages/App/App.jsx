import { useState, useEffect, useRef } from "react";
import { Route, Redirect } from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import AuthPage from "../AuthPage/AuthPage";
import TransactionPage from "../TransactionPage/TransactionPage";
import TransactionDetail from "../TransactionDetail/TransactionDetail";
import NavBar from "../../components/NavBar/NavBar";
import * as transactionsAPI from '../../utilities/transaction-api';
import * as usersAPI from '../../utilities/users-api';
import './App.css';

export default function App() {
    const [user, setUser] = useState(getUser());
    const [showForm, setShowForm] = useState(false)
    const [transactions, setTransactions] = useState([])
    const usersRef = useRef([]);

    useEffect(function () {
        async function getTransactions() {
            const allTransactions = await transactionsAPI.getAll();
            setTransactions(allTransactions);
        };
        getTransactions();
    }, [showForm]);

    useEffect(function () {
        console.log("getting users....")
        async function getAllUsers() {
            const allUsers = await usersAPI.getAll();
            usersRef.current = allUsers
        };
        getAllUsers();
    }, []);

    return (<main className="App">
        {user ? <>
            <NavBar user={user} setUser={setUser} />
            <Route exact path="/transactions">
                <TransactionPage transactions={transactions} user={user} showForm={showForm} setShowForm={setShowForm} usersRef={usersRef} />
            </Route>
            <Route exact path="/transactions/:id">
                <TransactionDetail transactions={transactions} />
            </Route>
            <Redirect to="/transactions" />
        </> : <AuthPage setUser={setUser} />}
    </main>);
}