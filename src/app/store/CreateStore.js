import {createStore} from 'redux'
import Auth from './AuthReducer'

//Store
const store = createStore(Auth);

export default store;
