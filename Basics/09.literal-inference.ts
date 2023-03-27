declare function handleRequest(url: string, method: 'GET' | 'POST'): void

const req = { url: 'https://example.com', method: 'GET' };
// req.method = "Guess"
handleRequest(req.url, req.method) // more narrow

// solution 1
const req1 = { url: 'https://example.com', method: 'GET' as 'GET' };
handleRequest(req.url, req1.method) // more narrow


// solution 2
handleRequest(req.url, req.method as 'GET') // more narrow

