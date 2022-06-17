import sendRequest from './send-request'

const BASE_URL = '/api/transactions'

export function createTransaction(formData) {
    return sendRequest(BASE_URL, 'POST', formData);
};

export function getAll() {
    return sendRequest(BASE_URL);
};

export function assignUser(payload) {
    return sendRequest(BASE_URL, 'PUT', payload);
};

export function getUserTransactions() {
    return sendRequest(`${BASE_URL}/user`)
}

export function createTask(formData) {
    return sendRequest(`${BASE_URL}/:id/task`, 'POST', formData)
}

export function createMessage(payload) {
    return sendRequest(`${BASE_URL}/:id/message`, 'POST', payload)
}