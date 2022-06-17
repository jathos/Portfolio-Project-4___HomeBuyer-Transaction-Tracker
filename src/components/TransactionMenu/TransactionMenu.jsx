function TransactionMenu() {

    function handleClick(evt) {
        console.log("Hi!  I'm ", evt.target.value)
    }

    return (

        <div className="viewsMenu">
            <div className="menuHeader">Menu</div>
            <div className="menuItemWrapper">
                <div className="menuItem">Tasks</div>
                <div className="menuItem" value="Div" onClick={handleClick}>Messages</div>
                <div className="menuItem">Contacts</div>
            </div>
        </div>
    );
};

export default TransactionMenu;