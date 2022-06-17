import { useState } from 'react';
import { useParams } from 'react-router-dom';
import TransactionMenu from '../../components/TransactionMenu/TransactionMenu';
import EscrowCounter from '../../components/EscrowCounter/EscrowCounter';
import TransactionViewFinder from '../../components/TransactionViewFinder/TransactionViewFinder';
import TNMBar from '../../components/TNMBar/TNMBar';
import './TransactionDetail.css'

function TransactionDetail({ transaction, user }) {
    const [view, setView] = useState("Tasks")
    const { id } = useParams();

    return (
        <>
            <h1>{transaction[id].street}, {transaction[id].address}</h1>
            <EscrowCounter date={transaction[id].closeDate} />
            <TNMBar user={user} />
            <div className="viewsWrapper">
                <TransactionMenu setView={setView} />
                <TransactionViewFinder view={view} />
            </div>
        </>
    );
};

export default TransactionDetail;