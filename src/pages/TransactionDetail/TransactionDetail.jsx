import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './TransactionDetail.css'

function TransactionDetail({ transaction }) {
    const [view, setView] = useState('Messages')
    const { id } = useParams();

    function handleClick(evt) {
        console.log("Hi!  I'm ", evt.target.name)
    }

    return (
        <>
            <div>
                <h1>{transaction[id].street}, {transaction[id].address}</h1>
                <h1>Your Escrow Closes on:</h1>
                {new Date(transaction[id].closeDate).toLocaleDateString()}
            </div>
            <div className="viewsWrapper">
                <div className="viewsMenu">
                    <div className="menuItem">Tasks</div>
                    <div className="menuItem" name="Div" onClick={handleClick}>Messages</div>
                </div>
                <div className="selectionView">
                    <div className="viewHeader">{view}</div>
                </div>
            </div>
        </>
    );
};

export default TransactionDetail;