import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './Header.css';

function Header({ user, setUser }) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <header className="header">
            {user ?
                <div className="nav-links">
                    <p>Welcome {user.name}</p>
                    <Link to="/transactions">All Transactions</Link>
                    <Link to="" onClick={handleLogOut}>Logout</Link>
                </div>
                :
                null
            }
            <Link to={'/'}><span class="material-symbols-outlined">
                home_app_logo
            </span>
                <p className="appName">Transaction Tracker</p></Link>
        </header >
    );
};

export default Header;