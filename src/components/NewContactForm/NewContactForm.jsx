import { useState } from 'react';
import * as contactAPI from '../../utilities/contact-api'

function NewContactForm({ user, rerender, setRerender }) {

    const [contactForm, setContactForm] = useState({
        role: "",
        name: "",
        company: "",
        phone: "",
        email: "",
        error: ""
    });

    function handleChange(evt) {
        const newState = { ...contactForm, [evt.target.name]: evt.target.value };
        setContactForm(newState);
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        if (contactForm.role == "") {
            setContactForm({ error: "Please select a role" })
        } else {
            const contact = await contactAPI.createContact(contactForm);
            setRerender(!rerender);
            const blankForm = {
                role: "",
                name: "",
                company: "",
                phone: "",
                email: "",
                error: ""
            };
            setContactForm(blankForm);
        }
    }

    return (
        <>
            {user.isAdmin ?
                <div className="contactForm">
                    <h5>Create New Contact</h5>
                    <form onSubmit={handleSubmit}>
                        <label>Role</label>
                        <select name="role" onChange={handleChange} value={contactForm.role}>
                            <option value="" >Select a Role</option>
                            <option value="escrow" >Escrow Officer</option>
                            <option value="title" >Title Officer</option>
                            <option value="lender" >Mortgage Officer</option>
                            <option value="tc" >Transaction Coordinator</option>
                            <option value="vendor" >Vendor</option>
                        </select>
                        <label>Name</label>
                        <input name="name" onChange={handleChange} value={contactForm.name} />
                        <label >Company</label>
                        <input name="company" onChange={handleChange} value={contactForm.company} />
                        <label>Phone</label>
                        <input name="phone" onChange={handleChange} value={contactForm.phone} />
                        <label>Email</label>
                        <input name="email" onChange={handleChange} value={contactForm.email} />
                        <button type="submit">Create Contact</button>
                    </form>
                    <p className="errorMessage">{contactForm.error}</p>
                </div> : null
            }
        </>
    );
};

export default NewContactForm;