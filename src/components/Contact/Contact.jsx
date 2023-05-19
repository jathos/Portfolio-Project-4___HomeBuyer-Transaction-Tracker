import Footer from '../Footer/Footer';
import './Contact.css';

function Contact({ setShowHomeLink, showHomeLink }) {

    setShowHomeLink(true);

    return (
        <>
            <div className="contact-wrapper">
                <div className="contact-main">
                    <div className="title-wrapper">
                        <p className="contact-title">CONTACT</p>
                    </div>
                    <div className="contact-content-wrapper">
                        <p className="contact-content">Homebound was created by Josh Bellon in Sacramento, CA.  Find him on&nbsp;<a href="https://www.linkedin.com/in/joshbellon/">Linkedin</a>&nbsp;at https://www.linkedin.com/in/joshbellon/</p>
                    </div>
                </div>

            </div>
            <Footer showHomeLink={showHomeLink}></Footer>
        </>
    )
};

export default Contact