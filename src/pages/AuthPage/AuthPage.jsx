import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from "react";

export default function AuthPage({ setUser, rerender, setRerender }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main>
            <div className="loginWrapper">
                <h1 className="welcome">Welome To Your New Home Purchase Management Portal</h1>
                <button className="loginButton" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
                {showLogin ? <LoginForm setUser={setUser} rerender={rerender} setRerender={setRerender} /> : <SignUpForm setUser={setUser} rerender={rerender} />}
            </div>
        </main>
    );
}