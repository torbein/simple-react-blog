import {createStore, applyMiddleware} from "redux";
import postsReducer from './reducers/posts-reducer';
import {browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";

import thunk from "redux-thunk";
import promise from "redux-promise";
import logger from "redux-logger";


const middleware = applyMiddleware( thunk, logger)
const store = createStore(postsReducer, middleware);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;