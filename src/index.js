import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import Root from './Root';
import stepsReducer from "./components/reducers/stepsReducer";

const store = createStore(stepsReducer);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
