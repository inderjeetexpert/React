import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'
import { Map } from 'immutable'

export default function selectedSubscriptionReducer(state=initialState.selectedSubscripton,action){
	switch(action.type){
		case TYPES.SELECT_PLAN:
			return action.product
		default :
			return state
	}
}
