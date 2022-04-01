import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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