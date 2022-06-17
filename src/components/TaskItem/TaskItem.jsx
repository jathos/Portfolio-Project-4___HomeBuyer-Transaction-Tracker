import { useState } from 'react';
import MessageFeed from '../MessageFeed/MessageFeed';

function TaskItem({ task }) {

    const [hideBody, setHideBody] = useState(true);

    const dueDate = new Date(task.dueDate).toLocaleDateString();

    return (
        <div className="taskItem" onClick={() => setHideBody(!hideBody)}>
            <h3>{task.subject}</h3>
            <p>Due Date: {dueDate}</p>
            {hideBody ? "" : <><p>{task.body}</p><MessageFeed /></>}
        </div>
    );
};

export default TaskItem;