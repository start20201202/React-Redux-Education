const defaultState = {
    customers: [],
};

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        /* action ADD and result in return */
        case 'ADD_CUSTOMER':
            return { ...state, cash: state.cash + action.payload };
        /* action GET and result in return */
        case 'GET_CUSTOMER':
            return { ...state, cash: state.cash - action.payload };
        default:
            return state;
    }
};
