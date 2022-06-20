import sendRequest from './send-request';

const BASE_URL = '/api/contacts';

export function createContact(payload) {
    return sendRequest(BASE_URL, 'POST', payload);
};

export function getAllContacts() {
    return sendRequest(BASE_URL);
};