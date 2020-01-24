import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {reducerThingy} from './reducer/reducerThingy.js';
import thunk from 'redux-thunk';
const store = createStore(reducerThingy, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));
