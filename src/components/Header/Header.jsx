import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <Link to={'/'}><span class="material-symbols-outlined">
                home_app_logo
            </span>
                <p className="appName">Transaction Tracker</p></Link>
        </header>
    );
};

export default Header;