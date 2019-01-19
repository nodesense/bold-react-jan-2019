// returns a promise
export function getAllProducts() {
    return fetch("http://api.nodesense.ai/api/products")
           .then (response => response.json())
}

// example for es8, async, await
export async function getProducts() {
    return fetch("http://api.nodesense.ai/api/products")
           .then (response => response.json())
}