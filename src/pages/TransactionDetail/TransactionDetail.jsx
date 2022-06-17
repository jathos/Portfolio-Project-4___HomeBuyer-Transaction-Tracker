import { useState } from 'react';
import { useParams } from 'react-router-dom';
import TransactionMenu from '../../components/TransactionMenu/TransactionMenu';
import EscrowCounter from '../../components/EscrowCounter/EscrowCounter';
import TransactionViewFinder from '../../components/TransactionViewFinder/TransactionViewFinder';
import './TransactionDetail.css'

function TransactionDetail({ transaction }) {
    const [view, setView] = useState("Tasks")
    const { id } = useParams();

    return (
        <>
            <h1>{transaction[id].street}, {transaction[id].address}</h1>
            <EscrowCounter date={transaction[id].closeDate} />
            <div className="viewsWrapper">
                <TransactionMenu />
                <TransactionViewFinder view={view} />
            </div>
        </>
    );
};

export default TransactionDetail;