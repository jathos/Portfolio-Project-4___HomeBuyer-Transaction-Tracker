import { useState } from 'react';
import NewContactForm from '../NewContactForm/NewContactForm';
import ContactItem from '../ContactItem/ContactItem';
import * as transactionAPI from '../../utilities/transaction-api';
import './ContactsView.css';

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
            <div className="contact-item">
                <div className="contact-item-header">
                    <div className="material-icons">
                        real_estate_agent
                    </div>
                    <p>Escrow</p>
                    <p>Officer</p>
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
            </div>

            <div className="contact-item">
                <div className="contact-item-header">
                    <div class="material-icons">
                        article
                    </div>
                    <p>Title</p>
                    <p>Officer</p>
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
            </div>

            <div className="contact-item">
                <div className="contact-item-header">
                    <div class="material-icons">
                        request_page
                    </div>
                    <p>Mortgage</p>
                    <p>Officer</p>
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
            </div>
            <div className="contact-item">
                <div className="contact-item-header">
                    <div class="material-icons">
                        edit
                    </div>
                    <p>Transaction</p>
                    <p>Coordinator</p>
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
            </div>

            <div className="contact-item">
                <div className="contact-item-header">
                    <div class="material-icons vendors">
                        construction
                    </div>
                    <p>Misc.</p>
                    <p>Vendors</p>
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