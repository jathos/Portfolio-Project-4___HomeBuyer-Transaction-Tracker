import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from "react";

export default function AuthPage({ setUser, rerender, setRerender }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main>
            <h1>AuthPage</h1>
            <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
            {showLogin ? <LoginForm setUser={setUser} rerender={rerender} setRerender={setRerender} /> : <SignUpForm setUser={setUser} rerender={rerender} />}
        </main>
    );
}