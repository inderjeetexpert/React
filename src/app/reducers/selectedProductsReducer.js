import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'
import { Map } from 'immutable'

export default function selectedProductsReducer(state=initialState.selectedProducts,action){
	switch(action.type){
		case TYPES.SELECT_PRODUCT:
			return Map(state).set(action.product.id,action.product).toObject()
		case TYPES.UNSELECT_PRODUCT:
			return Map(state).delete(action.productId).toObject()
		case TYPES.CLEAR_PRODUCT_SLECTION :
			return {}
		default :
			return state
	}
}
