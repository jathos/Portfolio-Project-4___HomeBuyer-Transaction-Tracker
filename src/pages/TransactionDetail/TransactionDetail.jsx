import { useParams } from 'react-router-dom';

function TransactionDetail({ transactions }) {
    const { id } = useParams();
    
    return (
        <div>
            <h1>Transaction Detail for {id}</h1>
            {transactions[id].street}
        </div>
    );
};

export default TransactionDetail;