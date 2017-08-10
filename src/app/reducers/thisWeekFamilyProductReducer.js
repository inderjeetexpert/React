import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'
import { Map } from 'immutable'

export default function thisWeekFamilyProduct(state=initialState.thisWeekFamilyProduct,action){
	switch(action.type){
		case TYPES.LOAD_THIS_WEEK_FAMILY_PRODUCT:
			return action.products
		default :
			return state
	}
}
