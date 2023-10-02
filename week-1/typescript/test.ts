declare function handleRequest(url: string, method: "GET" | "POST"): void;



const req = { url: "https://example.com", method: "GET" } as const;
// req.method = "POST";
handleRequest(req.url, req.method);