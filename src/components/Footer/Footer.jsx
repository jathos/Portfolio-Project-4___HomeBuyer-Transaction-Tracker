import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footerLinksWrapper">
                <Link to="/about"><a>About</a></Link>
                <a>Contact</a>
            </div>
        </div>
    );
};

export default Footer;