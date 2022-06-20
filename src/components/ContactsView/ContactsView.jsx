import { useRef, useEffect, useState } from 'react';
import NewContactForm from '../NewContactForm/NewContactForm';
import * as contactAPI from '../../utilities/contact-api'

function ContactsView({ user, rerender, setRerender }) {
    console.log("rendering contacts view")

    const contactsRef = useRef([]);

    const escrowRef = useRef([]);
    const titleContacts = [];
    const mortgageContacts = [];
    const tcContacts = [];
    const vendorContacts = [];

    useEffect(function () {
        console.log("getting contacts...")
        async function getAllContacts() {
            const allContacts = await contactAPI.getAllContacts();
            contactsRef.current = allContacts;
            console.log(escrowRef.current)
        }
        getAllContacts();
    });

    contactsRef.current.forEach(function (ele) {
        console.log("for each")
        if (ele.role == "escrow") {
            escrowRef.current.push(ele)
            console.log(escrowRef.current)
        } else if (ele.role == "title") {
            titleContacts.push(ele)
        } else if (ele.role == "lender") {
            mortgageContacts.push(ele)
        } else if (ele.role == "tc") {
            tcContacts.push(ele)
        } else {
            vendorContacts.push(ele)
        }
    });

    async function assignContact() {

    }

    return (
        <div className="contactsViewWrapper">
            <NewContactForm user={user} rerender={rerender} setRerender={setRerender} />
            <div className="contactsView">
                <h4>Escrow Officer</h4><hr></hr>
                {user.isAdmin ? <><form onSubmit={assignContact}>
                    <select>
                        {escrowRef.current.map(ele => <option>{ele.name}</option>)}
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
                        {titleContacts.map(ele => <option>{ele.name}</option>)}
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
                        {mortgageContacts.map(ele => <option>{ele.name}</option>)}
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
                        {tcContacts.map(ele => <option>{ele.name}</option>)}
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
                        {vendorContacts.map(ele => <option>{ele.name}</option>)}
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