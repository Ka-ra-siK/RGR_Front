export function customFetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
    init = init || {};
    init = {
        ...init,
        headers: {
            ...init.headers
        }
    };
    //@ts-ignore
    if (init.body && !(init.headers && init.headers['Content-Type'])) {
        init = {
            ...init,
            headers: {
                ...init.headers,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    }

    return fetch(input, init)
        .catch((resp: Response) => {
            return Promise.reject(resp);
        })
}