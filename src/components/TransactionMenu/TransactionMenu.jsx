function TransactionMenu({ setView, setViewFinder }) {

    function handleTasksClick() {
        setView("Tasks");
        setViewFinder("Tasks")
    };

    function handleMessagesClick() {
        setView("Messages");
        setViewFinder("Messages")
    };
    function handleContactsClick() {
        setView("Contacts");
        setViewFinder("Contacts")
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