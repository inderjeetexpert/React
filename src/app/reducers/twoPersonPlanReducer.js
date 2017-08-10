import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'
import { Map } from 'immutable'

export default function twoPersonPlan(state=initialState.twoPersonPlan,action){
	switch(action.type){
		case TYPES.LOAD_TWO_PERSON_PLAN_SUCCESS:
			return Map(state).set('busy',false).set('subscriptions',action.products).toObject()
		case TYPES.SELECT_TWO_PERSON_SUBSCRIPTION:
			return Map(state).set('selectedSubscripton',action.product).toObject()
		default :
			return state
	}
}
