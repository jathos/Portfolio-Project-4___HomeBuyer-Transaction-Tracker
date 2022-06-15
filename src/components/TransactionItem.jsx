function TransactionItem({ transaction }) {
    return (
        <div>
            {transaction.street}
            {transaction.address}
            <button>View Details</button>
        </div>
    );
};

export default TransactionItem;