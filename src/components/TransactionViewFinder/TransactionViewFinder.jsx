import TaskItem from "../TaskItem/TaskItem";
import ContactsView from "../ContactsView/ContactsView";

function TransactionViewFinder({ view, viewFinder, tasks, transactionID, transactionContacts, rerender, setRerender, user, contacts }) {

    const sortedTasks = tasks.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));

    return (
        <div className="selectionView">
            <div className="viewHeader">{view}</div>
            <div className="viewFinder">
                {(viewFinder === "Dictionary") ? <>Dictionary Coming Soon!</> : (viewFinder === "Tasks") ? tasks.map((ele, idx) => <TaskItem task={ele} key={idx} transactionID={transactionID} rerender={rerender} setRerender={setRerender} />) : (viewFinder === "Contacts") ? <ContactsView user={user} rerender={rerender} setRerender={setRerender} contacts={contacts} transactionID={transactionID} transactionContacts={transactionContacts} /> : <>Please make a selection from the menu</>}
            </div>
        </div>
    );
};

export default TransactionViewFinder;