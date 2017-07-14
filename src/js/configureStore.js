import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import reducers from './reducers/posts-reducer'

export function configureStore () {
  return createStore(
      combineReducers({
          reducers,
          routing: routerReducer
      }),
      /* Check if redux devtools is available. Should also check if in development mode */
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}