import { useState } from 'react';
import MessageFeed from '../MessageFeed/MessageFeed';

function TaskItem({ task, transactionID }) {

    const [hideBody, setHideBody] = useState(true);

    const dueDate = new Date(task.dueDate).toLocaleDateString();

    return (
        <div className="taskItem" >
            <div className="taskHeader" onClick={() => setHideBody(!hideBody)}>
                <h3>{task.subject}</h3>
                <p>Due Date: {dueDate}</p>
            </div>
            {hideBody ? "" : <><p>{task.body}</p><MessageFeed taskMessages={task.messages} taskID={task._id} transactionID={transactionID} /></>}
        </div>
    );
};

export default TaskItem;