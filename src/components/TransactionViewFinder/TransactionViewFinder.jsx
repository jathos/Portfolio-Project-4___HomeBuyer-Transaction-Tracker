import TaskItem from "../TaskItem/TaskItem";

function TransactionViewFinder({ view, viewFinder, tasks, transactionID, rerender, setRerender }) {
    return (
        <div className="selectionView">
            <div className="viewHeader">{view}</div>
            <div className="viewFinder">
                {(viewFinder === "Messages") ? <>Message Page</> : (viewFinder === "Tasks") ? tasks.map((ele, idx) => <TaskItem task={ele} key={idx} transactionID={transactionID} rerender={rerender} setRerender={setRerender} />) : (viewFinder === "Contacts" ? <>Contact Page</> : <>Please make a selection from the menu</>)}
            </div>
        </div>
    );
};

export default TransactionViewFinder;