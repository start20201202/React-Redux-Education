import { createStore, combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
/* использовать middleware с инструментами разработчика - npm i redux-devtools-extension */
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
});

/* reducer передается в store */
export const store = createStore(rootReducer, composeWithDevTools());
