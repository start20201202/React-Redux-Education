const defaultState = {
    customers: [],
};

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        /* action ADD and result in return */
        case 'ADD_CUSTOMER':
            return {
                ...state,
                customers: [...state.customers, action.payload],
            };
        /* action GET and result in return */
        case 'REMOVE_CUSTOMERS':
            return {
                ...state,
                customers: state.customers.filter(
                    (customer) => customer.id !== action.payload
                ),
            };
        default:
            return state;
    }
};
