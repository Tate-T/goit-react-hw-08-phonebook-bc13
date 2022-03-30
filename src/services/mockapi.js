import axios from 'axios';

axios.defaults.baseURL = 'https://6216b55b71e7672e53694d32.mockapi.io/';

export const addContactApi = (newContact) => {
    return axios.post('/contacts', newContact)
        .then(({ data }) => ({ ...newContact, id: data.id }))
        .catch((err) => err)
};

export const getContactApi = () => {
    return axios.get('/contacts')
        .then(({ data }) => data)
        .catch((err) => err);
};

export const deleteContactApi = (id) => {
    return axios.delete(`/contacts/${id}`)
        .then(({ data }) => data.id)
        .catch((err) => err);
};

export const filterContactsApi = (id) => {
    return axios.filter(`/contacts/${id}`)
        .then(({ data }) => data.id)
        .catch((err) => err);
};

// const BASE_URL = 'https://6216b55b71e7672e53694d32.mockapi.io/';
// // const KEY = '';

// async function fetchWithErrorHandling(url = '') {
//     const response = await fetch(url);
//     return response.ok
//         ? await response.json()
//         : Promise.reject(new Error('Not found'));
// }

// function fetchAddcotact(endpoint) {
//     return fetchWithErrorHandling(`${BASE_URL}/${endpoint}`);
// }

// const fetches = { fetchAddcotact }

// export default fetches