import sendRequest from './send-request';

const BASE_URL = '/api/tasks';

export function markComplete(payload) {
    return sendRequest(`${BASE_URL}/:id`, 'PUT', payload);
};