function ContactItem({ contact }) {
    return (
        <div>
            <p>Name: {contact.name}</p>
            <p>Company: {contact.company}</p>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
        </div>
    );
};

export default ContactItem;