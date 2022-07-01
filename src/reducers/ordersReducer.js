const SET_ORDERS = "SET_ORDERS"

const initialState = {
    ordersData: [],
}

export default function ordersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ORDERS:
            return {
                ...state,
                ordersData: action.payload.Result
            }
        default:
            return state
    }
}

export const setOrders = (orders) => ({type: SET_ORDERS, payload: orders})
