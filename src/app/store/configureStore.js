import {compose, createStore , applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {persistStore, autoRehydrate} from 'redux-persist'

// const configureStore=()=>{
// 	return createStore(
// 		rootReducer,
// 		applyMiddleware(thunk,logger)
// 	)
// }

const store = createStore(
	rootReducer,
	undefined,
	compose(
		applyMiddleware(thunk),
		//autoRehydrate()
	)
)

//persistStore(store);
export const purge=()=>{
	console.log('purging store');
	persistStore(store).purge()
}
const configureStore = ()=>{
	return store
}
export default configureStore
