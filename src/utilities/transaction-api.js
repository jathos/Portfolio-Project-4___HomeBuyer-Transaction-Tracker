import sendRequest from './send-request'

const BASE_URL = '/api/transactions'

export function createTransaction(formData) {
    return sendRequest(BASE_URL, 'POST', formData);
};

export function getAll() {
    return sendRequest(BASE_URL);
};

export function assignUser(payload) {
    console.log("made it to the api")
    return sendRequest(BASE_URL, 'PUT', payload);
};