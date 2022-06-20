import { useState } from 'react';
import NewContactForm from '../NewContactForm/NewContactForm';

function ContactsView({ user, rerender, setRerender }) {



    return (
        <div className="contactsViewWrapper">
            <NewContactForm user={user} rerender={rerender} setRerender={setRerender} />
            <div className="contactsView">
                <h4>Escrow Officer</h4>
                <h4>Title Officer</h4>
                <h4>Mortgage Officer</h4>
                <h4>Transaction Coordinator</h4>
                <h4>Vendors</h4>
            </div>
        </div>
    );
};

export default ContactsView;