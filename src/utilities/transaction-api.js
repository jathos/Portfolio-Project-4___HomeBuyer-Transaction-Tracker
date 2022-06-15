import sendRequest from './send-request'

const BASE_URL = '/api/transactions'

export function createTransaction(formData) {
    console.log("Inside transaction api create Transaction")
    return sendRequest(BASE_URL, 'POST', formData)
}