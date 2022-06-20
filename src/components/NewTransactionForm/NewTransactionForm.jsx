import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as transactionsAPI from '../../utilities/transaction-api';

function NewTransactionForm({ setShowForm }) {
    const [formData, setFormData] = useState({
        street: "",
        city: "",
        state: "",
        zip: "",
        closeDate: null
    });

    const history = useHistory();

    function handleChange(evt) {
        const newState = { ...formData, [evt.target.name]: evt.target.value };
        setFormData(newState);
    };

    async function handleTaskSubmit(evt) {
        evt.preventDefault();
        const transaction = await transactionsAPI.createTransaction(formData);
        setShowForm(false)
    }

    return (
        <div>
            <button onClick={() => setShowForm(false)}>Back</button>
            <form onSubmit={handleTaskSubmit}>
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

export default NewTransactionForm;