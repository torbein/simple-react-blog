import {combineReducers} from "redux";
import { routerReducer } from 'react-router-redux';

import postsReducer from './posts-reducer';

export default combineReducers({
    postsReducer,
    routing: routerReducer
})