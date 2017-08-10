import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'
import { Map } from 'immutable'
export default function deliveryReducer(state=initialState.delivery,action){
	switch (action.type) {
		case TYPES.SAVE_DELIVERY:
			return Map(state).set('thisWeek',action.delivery).toObject()
		default:
			return state
	}
}
