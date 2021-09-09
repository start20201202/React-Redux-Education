import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';

const defaultState = {
    cash: 0,
};
/* action = { type: '', payload: '' };
 */ const reducer = (state = defaultState, action) => {
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
/* reducer передается в store */
const store = createStore(reducer);

ReactDOM.render(
    /* через provider store попадает в react */
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,

    document.getElementById('root')
);
