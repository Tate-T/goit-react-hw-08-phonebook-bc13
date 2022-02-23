const BASE_URL = 'https://6216b55b71e7672e53694d32.mockapi.io/';
// const KEY = '';

async function fetchWithErrorHandling(url = '') {
    const response = await fetch(url);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

function fetchAddcotact(endpoint) {
    return fetchWithErrorHandling(`${BASE_URL}/${endpoint}`);
}

const fetches = { fetchAddcotact }

export default fetches