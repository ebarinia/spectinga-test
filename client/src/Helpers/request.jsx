class Request{

    async get(url, headers = {}) {
        const result = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        });
        return result.json();
    }
}

export default Request;