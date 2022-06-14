import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import AuthPage from "../AuthPage/AuthPage";
import TransactionPage from "../TransactionPage/TransactionPage";
import NavBar from "../../components/NavBar/NavBar";
import './App.css';

export default function App() {
    const [user, setUser] = useState(getUser());
    return (<main className="App">
        {user ? <>
            <NavBar user={user} setUser={setUser} />
            <Route path="/transactions">
                <TransactionPage user={user} />
            </Route>
            <Redirect to="/transactions" />
        </> : <AuthPage setUser={setUser} />}
    </main>);
}