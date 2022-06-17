function TransactionMenu({ setView }) {

    function handleTasksClick() {
        setView("Tasks");
    };

    function handleMessagesClick() {
        setView("Messages");
    };
    function handleContactsClick() {
        setView("Contacts");
    };

    return (

        <div className="viewsMenu">
            <div className="menuHeader">Menu</div>
            <div className="menuItemWrapper">
                <div className="menuItem" onClick={handleTasksClick}>Tasks</div>
                <div className="menuItem" onClick={handleMessagesClick}>Messages</div>
                <div className="menuItem" onClick={handleContactsClick}>Contacts</div>
            </div>
        </div>
    );
};

export default TransactionMenu;