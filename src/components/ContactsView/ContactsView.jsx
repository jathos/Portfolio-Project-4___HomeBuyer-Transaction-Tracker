import { useRef, useEffect, useState } from 'react';
import NewContactForm from '../NewContactForm/NewContactForm';
import * as contactAPI from '../../utilities/contact-api'

function ContactsView({ user, rerender, setRerender, contacts }) {

    // const contactsRef = useRef([]);

    // const escrowContacts = [];
    // const titleContacts = [];
    // const mortgageContacts = [];
    // const tcContacts = [];
    // const vendorContacts = [];



    // contactsRef.current.forEach(function (ele) {
    //     if (ele.role === "escrow") {
    //         escrowContacts.push(ele)
    //     } else if (ele.role === "title") {
    //         titleContacts.push(ele)
    //     } else if (ele.role === "lender") {
    //         mortgageContacts.push(ele)
    //     } else if (ele.role === "tc") {
    //         tcContacts.push(ele)
    //     } else {
    //         vendorContacts.push(ele)
    //     }
    // });

    async function assignContact() {

    }

    return (
        <div className="contactsViewWrapper">
            <NewContactForm user={user} rerender={rerender} setRerender={setRerender} />
            <div className="contactsView">
                <h4>Escrow Officer</h4><hr></hr>
                {user.isAdmin ? <><form onSubmit={assignContact}>
                    <select>
                        {contacts.escrow.map(ele => <option>{ele.name}</option>)}
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