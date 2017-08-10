import productsApi from '../api/productsApi'
import * as TYPES from './actionTypes'
import Config from '../config'

export function loadProducts(){
	return function(dispatch){
		return productsApi.getAllProducts().then(products=>{
			dispatch(loadProductsSuccess(products))
		}).catch(err=>{
			throw(err)
		});
	}
}

export function loadProductsSuccess(products){
	return {
		type:TYPES.LOAD_PRODUCTS_SUCCESS,
		products
	}
}

export function loadThisWeekTwoPeopleProduct(){
	return function(dispatch){
		return productsApi.getAllProductsByCat(Config.ThisWeekTwoPersonCatId).then(res=>{
			if(res.data.results){
				dispatch(loadThisWeekTwoPeopleProductSuccess(res.data.results))
			}

		}).catch(err=>{
			throw(err)
		});
	}
}
export function loadThisWeekFamilyProduct(){
	return function(dispatch){
		return productsApi.getAllProductsByCat(Config.ThisWeekFamilyCatId).then(res=>{
			if(res.data.results){
				dispatch(loadThisWeekFamilyProductSuccess(res.data.results))
			}

		}).catch(err=>{
			throw(err)
		});
	}
}
export function loadThisWeekTwoPeopleProductSuccess(products){
	return {
		type:TYPES.LOAD_THIS_WEEK_TWO_PEOPLE_PRODUCT,
		products
	}
}
export function loadThisWeekFamilyProductSuccess(products){
	return {
		type:TYPES.LOAD_THIS_WEEK_FAMILY_PRODUCT,
		products
	}
}
