import { useState } from 'react';
import * as transactionsAPI from '../../utilities/transaction-api'

function NewTaskForm({ }) {
    const [taskFormData, setTaskFormData] = useState({
        street: "",
        city: "",
        state: "",
        zip: "",
        closeDate: null
    })

    function handleChange(evt) {
        const newState = { ...taskFormData, [evt.target.name]: evt.target.value }
        setTaskFormData(newState)
    }

    async function handleTransactionSubmit(evt) {
        evt.preventDefault();
        const transaction = await transactionsAPI.createTransaction(taskFormData);
        // setShowForm(false)
    }

    return (
        <div>
            {/* <button onClick={() => setShowView(false)}>Back</button> */}
            <form onSubmit={handleTransactionSubmit}>
                <label>Street</label>
                <input name="street" onChange={handleChange} />
                <label>City</label>
                <input name="city" onChange={handleChange} />
                <label>State</label>
                <input name="state" onChange={handleChange} />
                <label>Zip</label>
                <input name="zip" onChange={handleChange} />
                <label>Close Date</label>
                <input type="date" name="closeDate" onChange={handleChange} />
                <button type="submit">Create Transaction</button>
            </form>
        </div>
    );
};

export default NewTaskForm;