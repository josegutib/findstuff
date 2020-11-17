export function setProducts(products) {
    return { type: "SET_PRODUCTS", payload: products }
}

export function setQuery(string) {
    return { type: "SET_QUERY", payload: string }
}

export function setFilter(string) {
    return { type: "SET_FILTER" , payload: string }
}

export function setPage(page) {
    return { type: "SET_PAGE" , payload: page }
}