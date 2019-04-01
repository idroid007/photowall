import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux';
import rootReducer from '../src/reducer/reducer'

const store = createStore(rootReducer);

ReactDOM.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('root'));
 

