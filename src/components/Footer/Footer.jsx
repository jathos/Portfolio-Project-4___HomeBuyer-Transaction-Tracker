import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import './Footer.css';

function Footer({ showHomeLink }) {


    return (
        <div className="footer">
            <div className="footerLinksWrapper">
                {showHomeLink ?
                    <Link to="/"><a>Home</a></Link> :
                    null
                }
                <Link to="/about"><a>About HomeBound</a></Link>
                <Link to="/contact"><a>Contact</a></Link>
            </div>
        </div >
    );
};

export default Footer;