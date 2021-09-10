const defaultState = {
    cash: 0,
};

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        /* action ADD and result in return */
        case 'ADD_CASH':
            return { ...state, cash: state.cash + action.payload };
        /* action GET and result in return */
        case 'GET_CASH':
            return { ...state, cash: state.cash - action.payload };
        default:
            return state;
    }
};
