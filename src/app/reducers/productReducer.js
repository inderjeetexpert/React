import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function productReducer(state=initialState.products,action){
	
	switch(action.type){
		case TYPES.LOAD_PRODUCTS_SUCCESS:
			return action.products
		default :
			return state
	}
}
