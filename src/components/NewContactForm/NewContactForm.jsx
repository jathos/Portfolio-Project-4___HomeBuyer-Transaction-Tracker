import { useState } from 'react';

function NewContactForm({ user }) {

    const [contactForm, setContactForm] = useState({
        role: "",
        name: "",
        company: "",
        phone: "",
        email: ""
    });

    function handleChange(evt) {
        const newState = { ...contactForm, [evt.target.name]: evt.target.value };
        setContactForm(newState);
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(contactForm)
    }

    return (
        <>
            {user.isAdmin ?
                <div className="contactForm">
                    <h5>Create New Contact</h5>
                    <form onSubmit={handleSubmit}>
                        <label>Role</label>
                        <select name="role" onChange={handleChange}>
                            <option value="" >Select a Role</option>
                            <option value="escrow" >Escrow Officer</option>
                            <option value="title" >Title Officer</option>
                            <option value="lender" >Mortgage Officer</option>
                            <option value="tc" >Transaction Coordinator</option>
                            <option value="vendor" >Vendor</option>
                        </select>
                        <label>Name</label>
                        <input name="name" onChange={handleChange} />
                        <label >Company</label>
                        <input name="company" onChange={handleChange} />
                        <label>Phone</label>
                        <input name="phone" onChange={handleChange} />
                        <label>Email</label>
                        <input name="email" onChange={handleChange} />
                        <button type="submit">Create Contact</button>
                    </form> </div> : null
            }
        </>
    );
};

export default NewContactForm;