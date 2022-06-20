import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TransactionMenu from '../../components/TransactionMenu/TransactionMenu';
import EscrowCounter from '../../components/EscrowCounter/EscrowCounter';
import TransactionViewFinder from '../../components/TransactionViewFinder/TransactionViewFinder';
import TNMBar from '../../components/TNMBar/TNMBar';
import NewTaskForm from '../../components/NewTaskForm/NewTaskForm';
import './TransactionDetail.css'

function TransactionDetail({ transaction, user, rerender, setRerender, contacts }) {
    const [view, setView] = useState("");
    const [viewFinder, setViewFinder] = useState("");
    const [showView, setShowView] = useState(true);
    const [splitContacts, setSplitContacts] = useState({
        escrow: [],
        title: [],
        mortgage: [],
        tc: [],
        vendor: []
    });
    const { id } = useParams();

    useEffect(function () {
        console.log("splitting contacts")
        let effectContacts = {
            escrow: [],
            title: [],
            mortgage: [],
            tc: [],
            vendor: []
        };
        contacts.forEach(function (ele) {
            if (ele.role === "escrow") {
                effectContacts.escrow.push(ele)
            } else if (ele.role === "title") {
                effectContacts.title.push(ele)
            } else if (ele.role === "lender") {
                effectContacts.mortgage.push(ele)
            } else if (ele.role === "tc") {
                effectContacts.tc.push(ele)
            } else {
                effectContacts.vendor.push(ele)
            }
        });
        setSplitContacts(effectContacts);
    }, [contacts]);

    return (
        <>
            <h1>{transaction[id].street}, {transaction[id].address}</h1>
            <EscrowCounter end={transaction[id].closeDate} start={transaction[id].acceptanceDate} />
            <TNMBar user={user} showView={showView} setShowView={setShowView} transaction={transaction[id]} />
            {showView ? <div className="viewsWrapper">
                <TransactionMenu setView={setView} setViewFinder={setViewFinder} />
                <TransactionViewFinder view={view} viewFinder={viewFinder} tasks={transaction[id].tasks} transactionID={transaction[id]._id} rerender={rerender} setRerender={setRerender} user={user} contacts={splitContacts} />
            </div>
                :
                <NewTaskForm id={transaction[id]._id} rerender={rerender} setRerender={setRerender} view={view} setShowView={setShowView} />}

        </>
    );
};

export default TransactionDetail;