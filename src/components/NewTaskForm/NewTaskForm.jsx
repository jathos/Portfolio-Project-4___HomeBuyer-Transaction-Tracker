import { useState } from 'react';
import * as transactionsAPI from '../../utilities/transaction-api'

function NewTaskForm({ rerender, setRerender, id, showView, setShowView }) {
    const [taskFormData, setTaskFormData] = useState({
        subject: "",
        body: "",
        dueDate: null,
        isUrgent: false,
        id: id
    })

    function handleChange(evt) {
        const newState = { ...taskFormData, [evt.target.name]: evt.target.value }
        setTaskFormData(newState)
    }

    async function handleTransactionSubmit(evt) {
        evt.preventDefault();
        const newTask = await transactionsAPI.createTask(taskFormData);
        setRerender(!rerender);
        setShowView(!showView);
    }

    return (
        <div>
            <form onSubmit={handleTransactionSubmit}>
                <label>Task Name</label>
                <input name="subject" onChange={handleChange} />
                <label>Task Description</label>
                <textarea name="body" rows="4" onChange={handleChange}></textarea>
                <label>Due Date</label>
                <input type="date" name="dueDate" onChange={handleChange} />
                <label>Urgent?</label>
                <input type="checkbox" name="isUrgent" onChange={handleChange} />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default NewTaskForm;