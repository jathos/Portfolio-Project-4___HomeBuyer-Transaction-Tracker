import './AuthPage.css';
import image from '../../public/family_newhome_bigkey2.jpg';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Footer from '../../components/Footer/Footer';
import { useState } from "react";

export default function AuthPage({ setUser, rerender, setRerender }) {

    const [showLogin, setShowLogin] = useState(true);

    return (
        <>
            <div className="loginWrapper">
                <div className="login-text-and-buttons">
                    <h1 className="welcome"><span style={{ fontSize: '6vw' }}>Welcome</span><br></br> To Your<br></br> <span style={{ fontSize: '7vw' }}>New Home</span><br></br><span style={{ fontSize: '4vw' }}>Escrow Management Portal</span></h1>
                    <button className="login-button" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'New User?  Create an Account' : 'Go Back to Login'}</button>
                    {showLogin ? <LoginForm setUser={setUser} rerender={rerender} setRerender={setRerender} /> : <SignUpForm setUser={setUser} rerender={rerender} />}
                </div>
                <div className="login-picture">
                    <img src={image}></img>
                </div>
            </div >
            <Footer></Footer>
        </>
    );
}