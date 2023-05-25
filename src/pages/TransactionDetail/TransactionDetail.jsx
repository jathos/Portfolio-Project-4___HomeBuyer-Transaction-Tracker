import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import TransactionMenu from '../../components/TransactionMenu/TransactionMenu';
import EscrowCounter from '../../components/EscrowCounter/EscrowCounter';
import TransactionViewFinder from '../../components/TransactionViewFinder/TransactionViewFinder';
import TNMBar from '../../components/TNMBar/TNMBar';
import NewTaskForm from '../../components/NewTaskForm/NewTaskForm';
import Header from '../../components/Header/Header';
import TaskItem from '../../components/TaskItem/TaskItem';
import ContactsView from '../../components/ContactsView/ContactsView';
import './TransactionDetail.css'

function TransactionDetail({ transaction, user, rerender, setRerender, contacts, setUser }) {

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

    const [taskCount, setTaskCount] = useState(0);

    const [menuItem, setMenuItem] = useState("");

    const { id } = useParams();

    const contactClass = classNames({
        'transaction-detail-menu-contacts': true,
        focused: (menuItem == "contacts")
    });

    const contactBackgroundClass = classNames({
        "background-focused": (menuItem == "contacts")
    });

    const documentClass = classNames({
        "transaction-detail-menu-documents": true,
        focused: (menuItem == "documents")
    });

    const documentBackgroundClass = classNames({
        "background-focused": (menuItem == "documents")
    })

    const taskClass = classNames({
        "transaction-detail-menu-tasks": true,
        focused: (menuItem == "tasks")
    });

    const taskBackgroundClass = classNames({
        "background-focused": (menuItem == "tasks")
    })

    const glossaryClass = classNames({
        "transaction-detail-menu-glossary": true,
        focused: (menuItem == "glossary")
    });

    const glossaryBackgroundClass = classNames({
        "background-focused": (menuItem == "glossary")
    })

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

    const daysToClose = Math.round((new Date(transaction[id].closeDate) - new Date()) / 86400000);

    function setContactsFocus() {
        setMenuItem("contacts");
    };

    function setDocumentsFocus() {
        setMenuItem("documents");
    };

    function setTasksFocus() {
        setMenuItem("tasks");
    };

    function setGlossaryFocus() {
        setMenuItem("glossary");
    };

    useEffect(() => {
        console.log("did i break it??");
        let incompleteTasks = 0;
        for (let i = 0; i < transaction[id].tasks.length; i++) {
            if (transaction[id].tasks[i].isCompleted == false) {
                incompleteTasks++
            }
        };
        setTaskCount(incompleteTasks);
    }, []);

    return (
        <>
            <Header user={user} setUser={setUser}></Header>
            <div className="transaction-detail-main">
                <div className="transaction-detail-header">
                    <div className="transaction-detail-header-address">
                        <p>{transaction[id].street.toUpperCase()}</p>
                        <p>{transaction[id].city.toUpperCase()}</p>
                        <p>{transaction[id].state}&nbsp;{transaction[id].zip}</p>
                    </div>
                    <div className="transaction-detail-header-escrow">
                        <p className="transaction-detail-escrow-words">Close of Escrow in</p>
                        <p className="transaction-detail-escrow-count">{daysToClose}</p>
                        <p className="transaction-detail-escrow-words">days</p>
                        <div className="transaction-detail-header-escrow-spinner"></div>
                    </div>
                </div>
                <div className="transaction-detail-body">
                    <div className="transaction-detail-body-menu">
                        <div className="transaction-detail-body-menu-items">
                            <div className={taskClass}>
                                <div className={taskBackgroundClass}>
                                    <p onClick={() => setTasksFocus()}>Tasks {taskCount > 0 ? <span className="transaction-detail-incomplete-task">{taskCount}</span> : null}</p>
                                </div>
                            </div>
                            <div className={contactClass}>
                                <div className={contactBackgroundClass}><p onClick={() => setContactsFocus()}>Contacts</p></div>
                            </div>
                            <div className={documentClass}>
                                <div className={documentBackgroundClass}>
                                    <p onClick={() => setDocumentsFocus()}>Documents</p>
                                </div>
                            </div>
                            <div className={glossaryClass}>
                                <div className={glossaryBackgroundClass}>
                                    <p onClick={() => setGlossaryFocus()}>Glossary</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="transaction-detail-body-view">
                        {(menuItem === "glossary") ? <>Glossary Coming Soon!</> : (menuItem === "tasks") ? transaction[id].tasks.map((ele, idx) => <TaskItem task={ele} key={idx} transactionID={transaction[id]._id} rerender={rerender} setRerender={setRerender} taskCount={taskCount} setTaskCount={setTaskCount} />) : (menuItem === "contacts") ? <ContactsView user={user} rerender={rerender} setRerender={setRerender} contacts={contacts} transactionID={transaction[id]._id} transactionContacts={transaction[id].contacts} /> : (menuItem == "documents") ? <>Documents coming soon!</> : <>Please make a selection from the menu</>}
                    </div>
                </div>
            </div>
            {/* <h1 className="address">{transaction[id].street}, {transaction[id].address}</h1>
            <hr className="underAddress"></hr>
            <EscrowCounter end={transaction[id].closeDate} start={transaction[id].acceptanceDate} />
            <TNMBar user={user} showView={showView} setShowView={setShowView} transaction={transaction[id]} />
            {showView ? <div className="viewsWrapper">
                <TransactionMenu setView={setView} setViewFinder={setViewFinder} />
                <TransactionViewFinder view={view} viewFinder={viewFinder} tasks={transaction[id].tasks} transactionID={transaction[id]._id} transactionContacts={transaction[id].contacts} rerender={rerender} setRerender={setRerender} user={user} contacts={splitContacts} />
            </div>
                :
                <NewTaskForm id={transaction[id]._id} rerender={rerender} setRerender={setRerender} view={view} setShowView={setShowView} />} */}

        </>
    );
};

export default TransactionDetail;