import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';
import { store } from './store';

/* action = { type: '', payload: '' };
 */

ReactDOM.render(
    /* через provider store попадает в react */
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,

    document.getElementById('root')
);
