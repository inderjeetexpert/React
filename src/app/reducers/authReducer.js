import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function authReducer(state=initialState.auth,action){
	switch (action.type) {
		case TYPES.AUTH_STATE_CHANGED:
			return {
				loggedIn : localStorage.getItem('loggedIn')==='true'?true:false,
				name : localStorage.getItem('name')||'Guest',
				busy:false
			}
		case TYPES.AUTH_STATE_BUSY:{
			return {
				loggedIn:state.loggedIn,
				name : state.name,
				busy:true
			}
		}
		default:
			return state
	}
}
