import Footer from '../Footer/Footer';
import './About.css';

function About() {
    return (
        <>
            <div className="about-wrapper">
                <div className="about-main">
                    <div className="title-wrapper">
                        <p className="about-title">ABOUT TRANSACTION TRACKER</p>
                    </div>
                    <div className="content-wrapper">
                        <p className="about-content"><span class="material-symbols-outlined" style={{ color: '#13097C', position: 'relative', bottom: '7px', right: '3px' }}>
                            home_app_logo
                        </span>Transaction Tracker is the result of years of experience and feedback in the real estate industry.  It was created with the goal of improving the escrow process for both homebuyers and their agents.</p>
                    </div>
                    <div className="content-wrapper">
                        <p className="about-content"><span class="material-symbols-outlined" style={{ color: '#13097C', position: 'relative', bottom: '7px', right: '3px' }}>
                            home_app_logo
                        </span>Consumers are more empowered than ever in the modern digital age.  Yet, during one of the biggest and most important purchases of their life homebuyers are likely to find themselves feeling confused, overwhelmed, and at the mercy of others.</p>
                    </div>
                    <div className="content-wrapper">
                        <p className="about-content"><span class="material-symbols-outlined" style={{ color: '#13097C', position: 'relative', bottom: '7px', right: '3px' }}>
                            home_app_logo
                        </span>Transaction Tracker returns a sense of control over the escrow process to today's homebuyers, while not interfering with the much needed expertise and guidance of a licensed real estate professional.</p>
                    </div>
                    <div className="content-wrapper">
                        <p className="about-content"><span class="material-symbols-outlined" style={{ color: '#13097C', position: 'relative', bottom: '7px', right: '3px' }}>
                            home_app_logo
                        </span>Through Transaction Tracker, homebuyers will have convenient access to schedules, pending tasks, deadlines, important documents, and contact information, simultaneously de-mystifying the escrow process for new homeowners while also freeing up agents to devote their time to what's most important.</p>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    )
};

export default About