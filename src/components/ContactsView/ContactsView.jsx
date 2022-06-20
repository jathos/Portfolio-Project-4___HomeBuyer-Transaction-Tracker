import { useState } from 'react';
import NewContactForm from '../NewContactForm/NewContactForm';
import * as transactionAPI from '../../utilities/transaction-api'

function ContactsView({ user, rerender, setRerender, contacts, transactionID, transactionContacts }) {
    console.log(transactionContacts);

    const [contactForm, setContactForm] = useState("");

    async function assignContact(evt) {
        evt.preventDefault();
        const payload = {
            contact: contactForm,
            transaction: transactionID
        }
        const assignContact = await transactionAPI.assignContact(payload);
        setRerender(!rerender);
    }

    function handleChange(evt) {
        setContactForm(evt.target.value);
    }

    return (
        <div className="contactsViewWrapper">
            <NewContactForm user={user} rerender={rerender} setRerender={setRerender} />
            <div className="contactsView">
                <h4>Escrow Officer</h4><hr></hr>
                <p>{transactionContacts[0].name}</p>
                {user.isAdmin ? <><form onSubmit={assignContact}>
                    <select onChange={handleChange}>
                        <option value="">Select a Contact</option>
                        {contacts.escrow.map(ele => <option value={ele._id}>{ele.name}</option>)}
                    </select>
                    <button type="submit">Add</button>
                </form>
                </> :
                    <>
                        Description
                    </>
                }
                <h4>Title Officer</h4><hr></hr>
                {user.isAdmin ? <><form>
                    <select>
                        <option value="">Select a Contact</option>
                        {contacts.title.map(ele => <option>{ele.name}</option>)}
                    </select>
                    <button>Add</button>
                </form>
                </> :
                    <>
                        Description
                    </>
                }
                <h4>Mortgage Officer</h4><hr></hr>
                {user.isAdmin ? <><form>
                    <select>
                        <option value="">Select a Contact</option>
                        {contacts.mortgage.map(ele => <option>{ele.name}</option>)}
                    </select>
                    <button>Add</button>
                </form>
                </> :
                    <>
                        Description
                    </>
                }
                <h4>Transaction Coordinator</h4><hr></hr>
                {user.isAdmin ? <><form>
                    <select>
                        <option value="">Select a Contact</option>
                        {contacts.tc.map(ele => <option>{ele.name}</option>)}
                    </select>
                    <button>Add</button>
                </form>
                </> :
                    <>
                        Description
                    </>
                }
                <h4>Vendors</h4><hr></hr>
                {user.isAdmin ? <><form>
                    <select>
                        <option value="">Select a Contact</option>
                        {contacts.vendor.map(ele => <option>{ele.name}</option>)}
                    </select>
                    <button>Add</button>
                </form>
                </> :
                    <>
                        Description
                    </>
                }
            </div>
        </div>
    );
};

export default ContactsView;