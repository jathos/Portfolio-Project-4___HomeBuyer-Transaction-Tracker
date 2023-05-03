import './Header.css';

function Header() {
    return (
        <header className="header">
            <span class="material-symbols-outlined">
                home_app_logo
            </span>
            <p className="appName">Transaction Tracker</p>
        </header>
    );
};

export default Header;