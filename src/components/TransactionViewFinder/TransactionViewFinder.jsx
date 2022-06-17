function TransactionViewFinder({ view }) {
    return (
        <div className="selectionView">
            <div className="viewHeader">{view}</div>
            <div className="viewFinder">
                You have no pending tasks!
            </div>
        </div>
    );
};

export default TransactionViewFinder;