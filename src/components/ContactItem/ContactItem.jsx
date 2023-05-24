function ContactItem({ contact }) {
    return (
        <div className="contactDetails">
            <p><span className="contact-details-title">Name:</span> {contact.name}</p>
            <p><span className="contact-details-title">Company:</span> {contact.company}</p>
            <p><span className="contact-details-title">Phone:</span> {contact.phone}</p>
            <p><span className="contact-details-title">Email:</span> {contact.email}</p>
        </div>
    );
};

export default ContactItem;