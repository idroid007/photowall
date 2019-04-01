import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux';
import rootReducer from '../src/reducer/reducer'
import {Provider} from 'react-redux'
import App from './reducer/App'

const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
 

