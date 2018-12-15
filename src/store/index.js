import{createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

import redurces from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [thunk]

const store = createStore(
    redurces,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
)
export default store