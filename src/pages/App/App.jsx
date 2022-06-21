import { useState, useEffect, useRef } from "react";
import { Route, Redirect } from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import AuthPage from "../AuthPage/AuthPage";
import TransactionPage from "../TransactionPage/TransactionPage";
import TransactionDetail from "../TransactionDetail/TransactionDetail";
import NavBar from "../../components/NavBar/NavBar";
import * as transactionsAPI from '../../utilities/transaction-api';
import * as usersAPI from '../../utilities/users-api';
import * as contactAPI from '../../utilities/contact-api';
import './App.css';

export default function App() {
    const [user, setUser] = useState(getUser());
    const [showForm, setShowForm] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [rerender, setRerender] = useState(false);
    const [contacts, setContacts] = useState([]);
    const usersRef = useRef([]);


    useEffect(function () {
        async function getAllUsers() {
            const allUsers = await usersAPI.getAll();
            usersRef.current = allUsers
        };
        getAllUsers();
    }, [user]);

    useEffect(function () {
        async function getTransactions() {
            if (user.isAdmin) {
                const allTransactions = await transactionsAPI.getAll();
                setTransactions(allTransactions);
            } else {
                const userTransactions = await transactionsAPI.getUserTransactions();
                setTransactions(userTransactions);
            }
        };
        getTransactions();
    }, [showForm, rerender, user]);

    useEffect(function () {
        async function getAllContacts() {
            const allContacts = await contactAPI.getAllContacts();
            setContacts(allContacts);
        }
        getAllContacts();
    }, [user, rerender]);

    return (<main className="App">
        {user ? <>
            <NavBar user={user} setUser={setUser} />
            <Route exact path="/transactions">
                <TransactionPage transactions={transactions} user={user} setRerender={setRerender} showForm={showForm} setShowForm={setShowForm} usersRef={usersRef} />
            </Route>
            <Route exact path="/transactions/:id">
                <TransactionDetail transaction={transactions} user={user} rerender={rerender} setRerender={setRerender} contacts={contacts} />
            </Route>
            <Redirect to="/transactions" />
        </> : <AuthPage setUser={setUser} rerender={rerender} setRerender={setRerender} />}
    </main>);
}