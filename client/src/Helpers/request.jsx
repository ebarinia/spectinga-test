class Request{

    async get(url){
        const result = await fetch(url);
        return result.json();
    }

    patch(url,payload){
        return fetch(url, {
            method: "PATCH",  
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        })
    }
}

export default Request;