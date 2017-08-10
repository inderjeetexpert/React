import accountApi from '../api/accountApi'
import * as TYPES from './actionTypes'

export function saveDelivery(delivery,cb){
	return function(dispatch){
		return accountApi.saveDelivery(delivery).then(res=>{
			cb(res)
		}).catch(err=>{
			throw(err)
		});
	}
}


export function saveDeliverySuccess(delivery){
	return {
		type:TYPES.SAVE_DELIVERY,
		delivery
	}
}
