import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footerLinksWrapper">
                <Link to="/about"><a>About</a></Link>
                <Link to="/contact"><a>Contact</a></Link>
            </div>
        </div>
    );
};

export default Footer;