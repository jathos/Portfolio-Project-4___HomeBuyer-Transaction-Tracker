import { useState } from 'react';
import NewContactForm from '../NewContactForm/NewContactForm';
import ContactItem from '../ContactItem/ContactItem';
import * as transactionAPI from '../../utilities/transaction-api'

function ContactsView({ user, rerender, setRerender, contacts, transactionID, transactionContacts }) {

    const [contactForm, setContactForm] = useState("");

    async function assignContact(evt) {
        evt.preventDefault();
        const payload = {
            contact: contactForm,
            transaction: transactionID
        }
        const assignContact = await transactionAPI.assignContact(payload);
        setRerender(!rerender);
    };

    function handleChange(evt) {
        setContactForm(evt.target.value);
    };

    return (
        <div className="contactsViewWrapper">
            <NewContactForm user={user} rerender={rerender} setRerender={setRerender} />
            <div className="contactsView">
                <div className="contactHeader">
                    <h4>Escrow Officer</h4>
                </div>
                {transactionContacts.map(ele => (ele.role === "escrow") ? <ContactItem contact={ele} /> : null)}
                {user.isAdmin ? <><form className="addContactForm" onSubmit={assignContact}>
                    <select onChange={handleChange}>
                        <option value="">Select a Contact</option>
                        {contacts.escrow.map(ele => <option value={ele._id}>{ele.name}</option>)}
                    </select>
                    <button type="submit">Add</button>
                </form>
                </> :
                    null
                }
                <div className="contactHeader">
                    <h4>Title Officer</h4>
                </div>
                {transactionContacts.map(ele => (ele.role === "title") ? <ContactItem contact={ele} /> : null)}
                {user.isAdmin ? <><form className="addContactForm" onSubmit={assignContact}>
                    <select onChange={handleChange}>
                        <option value="">Select a Contact</option>
                        {contacts.title.map(ele => <option value={ele._id}>{ele.name}</option>)}
                    </select>
                    <button type="submit">Add</button>
                </form>
                </> :
                    null
                }
                <div className="contactHeader">
                    <h4>Mortgage Officer</h4>
                </div>
                {transactionContacts.map(ele => (ele.role === "lender") ? <ContactItem contact={ele} /> : null)}
                {user.isAdmin ? <><form className="addContactForm" onSubmit={assignContact}>
                    <select onChange={handleChange}>
                        <option value="">Select a Contact</option>
                        {contacts.mortgage.map(ele => <option value={ele._id}>{ele.name}</option>)}
                    </select>
                    <button type="submit">Add</button>
                </form>
                </> :
                    null
                }
                <div className="contactHeader">
                    <h4>Transaction Coordinator</h4>
                </div>
                {transactionContacts.map(ele => (ele.role === "tc") ? <ContactItem contact={ele} /> : null)}
                {user.isAdmin ? <><form className="addContactForm" onSubmit={assignContact}>
                    <select onChange={handleChange}>
                        <option value="">Select a Contact</option>
                        {contacts.tc.map(ele => <option value={ele._id}>{ele.name}</option>)}
                    </select>
                    <button type="submit">Add</button>
                </form>
                </> :
                    null
                }
                <div className="contactHeader">
                    <h4>Vendors</h4>
                </div>
                {transactionContacts.map(ele => (ele.role === "vendor") ? <ContactItem contact={ele} /> : null)}
                {user.isAdmin ? <><form className="addContactForm" onSubmit={assignContact}>
                    <select onChange={handleChange}>
                        <option value="">Select a Contact</option>
                        {contacts.vendor.map(ele => <option value={ele._id}>{ele.name}</option>)}
                    </select>
                    <button type="submit">Add</button>
                </form>
                </> :
                    null
                }
            </div>
        </div >
    );
};

export default ContactsView;