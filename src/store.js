import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'




import AllReducers from './reducers'

const initalState = {

}

const middleware = [thunk]
const store = createStore(
	reducer,
	
)
export default store;