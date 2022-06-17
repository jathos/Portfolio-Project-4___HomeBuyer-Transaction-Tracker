import { useState } from 'react';
import { useParams } from 'react-router-dom';
import TransactionMenu from '../../components/TransactionMenu/TransactionMenu';
import EscrowCounter from '../../components/EscrowCounter/EscrowCounter';
import TransactionViewFinder from '../../components/TransactionViewFinder/TransactionViewFinder';
import TNMBar from '../../components/TNMBar/TNMBar';
import NewTaskForm from '../../components/NewTaskForm/NewTaskForm';
import './TransactionDetail.css'

function TransactionDetail({ transaction, user }) {
    const [view, setView] = useState("");
    const [viewFinder, setViewFinder] = useState("");
    const [showView, setShowView] = useState(true);
    const [tasks, setTasks] = useState([]);
    const { id } = useParams();

    return (
        <>
            <h1>{transaction[id].street}, {transaction[id].address}</h1>
            <EscrowCounter date={transaction[id].closeDate} />
            <TNMBar user={user} showView={showView} setShowView={setShowView} />
            {showView ? <div className="viewsWrapper">
                <TransactionMenu setView={setView} setViewFinder={setViewFinder} />
                <TransactionViewFinder view={view} viewFinder={viewFinder} />
            </div>
                :
                <NewTaskForm id={transaction[id]._id} tasks={tasks} setTasks={setTasks} view={view} setShowView={setShowView} />}

        </>
    );
};

export default TransactionDetail;