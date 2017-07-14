import React from 'react'
import ReactDOM from 'react-dom'

import ClientRouter from "./client-router";

import { configureStore } from './configureStore';
import { congigureHistory } from './configureHistory';

const store = configureStore();
const history = congigureHistory(store);

ReactDOM.render(<ClientRouter store={store} history={history}/>, document.getElementById('app'));