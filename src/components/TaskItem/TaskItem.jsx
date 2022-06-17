import { useState } from 'react';

function TaskItem({ task }) {

    const [hideBody, setHideBody] = useState(true);

    const dueDate = new Date(task.dueDate).toLocaleDateString();

    return (
        <div className="classItem" onClick={() => setHideBody(!hideBody)}>
            <h3>{task.subject}</h3>
            <p>Due Date: {dueDate}</p>
            {hideBody ? "" : <p>{task.body}</p>}
        </div>
    );
};

export default TaskItem;