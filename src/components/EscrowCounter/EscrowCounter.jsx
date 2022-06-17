function EscrowCounter({ date }) {
    return (
        <div className="escrowCounter">
            <h1>Your Escrow Closes On:</h1>
            {new Date(date).toLocaleDateString()}
        </div>
    );
};

export default EscrowCounter;