import { useState } from 'react';
import MessageFeed from '../MessageFeed/MessageFeed';
import * as taskAPI from '../../utilities/task-api';

function TaskItem({ task, transactionID, rerender, setRerender }) {

    const [hideBody, setHideBody] = useState(true);

    const dueDate = new Date(task.dueDate).toLocaleDateString();

    async function markComplete() {
        const payload = {
            taskID: task._id,
            transactionID: transactionID
        };
        const updatedTask = await taskAPI.markComplete(payload);
        setRerender(!rerender);
    };

    return (
        <div className="taskItem" >
            <div className="taskHeader">
                <div className="taskTitle" onClick={() => setHideBody(!hideBody)}>
                    <h3>{task.subject}</h3>
                    <p>Due Date: {dueDate}</p>
                </div>
                <div>
                    {task.isCompleted ? <h3 className="taskComplete">Completed!</h3> : <button onClick={markComplete}>Mark Complete</button>}
                </div>
            </div>
            {hideBody ? "" : <><p>{task.body}</p><MessageFeed taskMessages={task.messages} taskID={task._id} transactionID={transactionID} rerender={rerender} setRerender={setRerender} /></>}
        </div>
    );
};

export default TaskItem;