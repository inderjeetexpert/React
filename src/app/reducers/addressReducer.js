import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'
import { Map } from 'immutable'
export default function addressReducer(state=initialState.addresses,action){
	switch (action.type) {
		case TYPES.SAVE_ADDRESS:
			state.push(action.address)
			return Map(state).toObject()
		case TYPES.ADDRESS_CHANGED:
			return action.addresses
		default:
			return state
	}
}
