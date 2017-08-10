import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'
import { Map } from 'immutable'

export default function stateReducer(state=initialState.context,action){
	switch(action.type){
		case TYPES.CHANGE_PRODUCT_SELECTION_CONTEXT:
			return Map(state).set('currentProductSelectionContext',action.value).toObject()
		default:
			return state
	}
}
