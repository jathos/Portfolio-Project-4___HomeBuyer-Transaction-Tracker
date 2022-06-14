function TransactionPage({ user }) {
    return (
        <div>
            <h1>Transaction Page</h1>
            <h1>{user.name}</h1>
            <h1>{user.isAdmin ? "is admin" : "is NOT Admin"}</h1>
        </div>
    );
};

export default TransactionPage;