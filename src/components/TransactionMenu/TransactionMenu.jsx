function TransactionMenu({ setView, setViewFinder }) {

    function handleTasksClick() {
        setView("Tasks");
        setViewFinder("Tasks")
    };

    function handleDictionaryClick() {
        setView("Dictionary");
        setViewFinder("Dictionary")
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
                <div className="menuItem" onClick={handleContactsClick}>Contacts</div>
                <div className="menuItem" onClick={handleDictionaryClick}>Dictionary</div>
            </div>
        </div>
    );
};

export default TransactionMenu;