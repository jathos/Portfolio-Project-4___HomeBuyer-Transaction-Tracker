function TransactionViewFinder({ view, viewFinder }) {
    return (
        <div className="selectionView">
            <div className="viewHeader">{view}</div>
            <div className="viewFinder">
                {(viewFinder === "Messages") ? <>Message Page</> : (viewFinder === "Tasks") ? <>Task Page</> : (viewFinder === "Contacts" ? <>Contact Page</> : <>Please make a selection from the menu</>)}
            </div>
        </div>
    );
};

export default TransactionViewFinder;