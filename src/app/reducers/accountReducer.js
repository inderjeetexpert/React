import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'
import { Map } from 'immutable'
export default function accountReducer(state=initialState.account,action){
	switch (action.type) {
		case TYPES.ACCOUNT_CHANGED:
			return Map(state).set('user',action.user).toObject()
		case TYPES.CARDS_CHANGED:
			return Map(state).set('cards',action.cards).toObject()
		case TYPES.SUBSCRIPTION_CHANGED:
			return Map(state).set('subscription',action.subscription).toObject()
		default:
			return state
	}
}
