import { useState } from 'react';
import * as transactionsAPI from '../../utilities/transaction-api'

function NewTransactionForm() {
    const [formData, setFormData] = useState({
        street: "",
        city: "",
        state: "",
        zip: "",
        closeDate: null
    })

    function handleChange(evt) {
        const newState = { ...formData, [evt.target.name]: evt.target.value }
        setFormData(newState)
    }

    async function handleTransactionSubmit(evt) {
        evt.preventDefault();
        console.log("inside handleTransaction function")
        console.log(formData)
        const transaction = await transactionsAPI.createTransaction(formData);
        console.log("AFTER handleTransaction await statement")
    }

    return (
        <div>
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
            <h1>{formData.street}</h1>
            <h1>{formData.city}, {formData.state} {formData.zip}</h1>
            <h1>{formData.closeDate}</h1>
        </div>
    );
};

export default NewTransactionForm;