import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import reducer from './redux/reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

const app = (
    <Provider store={store}>
    <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
