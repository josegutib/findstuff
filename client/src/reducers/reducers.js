const initialState = {
    products: [],
    query: "",
    filter:"Mas Relevantes",
    page: 0
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        case "SET_QUERY":
            return {
                ...state,
                query: action.payload
            }
        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload
            }
        case "SET_PAGE":
            return {
                ...state,
                page: action.payload
            }

        default: return state

    }

}

export default rootReducer;