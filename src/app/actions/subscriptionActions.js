import productsApi from '../api/productsApi'
import * as TYPES from './actionTypes'
import Config from '../config'
import {changeTab} from './signupActions'

export function loadTwoPersonProducts(onProductLoaded){
	return function(dispatch){
		return productsApi.getAllProductsByCat(Config.TwoPersonSubscriptonCategoryId).then(res=>{
			if(res.data && res.data.results){
				const products = res.data.results
				dispatch(loadTwoPersonPlanSuccess(products))
				onProductLoaded();
			}
		}).catch(err=>{
			throw(err)
		});
	}
}

export function loadFamilyProducts(onProductLoaded){
	return function(dispatch){
		return productsApi.getAllProductsByCat(Config.FamilySubscriptonCategoryId).then(res=>{
			if(res.data && res.data.results){
				const products = res.data.results
				dispatch(loadFamilyPlanSuccess(products))
				onProductLoaded();
			}
		}).catch(err=>{
			throw(err)
		});
	}
}

export function loadTwoPersonPlanSuccess(products){
	return {
		type:TYPES.LOAD_TWO_PERSON_PLAN_SUCCESS,
		products
	}
}
export function loadFamilyPlanSuccess(products){
	return {
		type:TYPES.LOAD_FAMILY_PLAN_SUCCESS,
		products
	}
}

export function selectTwoPersonSubscription(product){
	return {
		type : TYPES.SELECT_TWO_PERSON_SUBSCRIPTION,
		product
	}
}
export function selectFamilySubscription(product){
	return {
		type : TYPES.SELECT_FAMILY_SUBSCRIPTION,
		product
	}
}

export function selectPlan(product={}){
	return (dispatch)=>{
		if(product && product.id){
			dispatch(makeSelected(product))
			dispatch(incompletePreference(false))
		}else{
			dispatch(makeSelected(product))
			dispatch(incompletePreference(true))
		}
	}
}

export function selectProduct(product){
	return {
		type : TYPES.SELECT_PRODUCT,
		product
	}
}

export function unselectProduct(productId){
	return {
		type : TYPES.UNSELECT_PRODUCT,
		productId
	}
}

export function clearProductSlection(){
	return {
		type : TYPES.CLEAR_PRODUCT_SLECTION
	}
}

export function makeSelected(product){
	return {
		type : TYPES.SELECT_PLAN,
		product
	}
}


export function incompletePreference(value){
	return {
		type : TYPES.INCOMPLET_PREFERENCE,
		value
	}
}
