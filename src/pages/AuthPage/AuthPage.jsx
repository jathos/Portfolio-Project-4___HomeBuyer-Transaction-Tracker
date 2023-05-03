import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from "react";

export default function AuthPage({ setUser, rerender, setRerender }) {

    const [showLogin, setShowLogin] = useState(true);

    const style = {
        height: 200,
        width: 200,
    };

    return (
        <>
            <div className="loginWrapper">
                <div className="login-text-and-buttons">
                    <h1 className="welcome"><span style={{ fontSize: 80 }}>Welcome</span><br></br> To Your<br></br> <span style={{ fontSize: 90 }}>New Home</span><br></br><span style={{ fontSize: 50 }}>Escrow Management Portal</span></h1>
                    <button className="login-button" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
                    {showLogin ? <LoginForm setUser={setUser} rerender={rerender} setRerender={setRerender} /> : <SignUpForm setUser={setUser} rerender={rerender} />}
                </div>
                <div className="login-picture">

                </div>
            </div>
        </>
    );
}