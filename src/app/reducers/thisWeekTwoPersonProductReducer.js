import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'
import { Map } from 'immutable'

export default function thisWeekTwoPersonProduct(state=initialState.thisWeekTwoPersonProduct,action){
	switch(action.type){
		case TYPES.LOAD_THIS_WEEK_TWO_PEOPLE_PRODUCT:
			return action.products
		default :
			return state
	}
}
