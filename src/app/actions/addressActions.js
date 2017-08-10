import * as TYPES from './actionTypes'
import validator from 'validator'
import accountApi from '../api/accountApi'


export function saveAddress(address,errorHandler){
	return function(dispatch){
		return accountApi.saveAddress(address).then(res=>{
			errorHandler(res);
			if(res.data.results){
				return function(dispatch){
					dispatch(addressChanged(res.data.addresses))
				}
			}
		}).catch(err=>{
			//console.log(err)
		})
	}

}

export function getAddresses(callback){
	return function(dispatch){
		return accountApi.getAddresses().then(res=>{
			if(res.data.results){
				dispatch(addressChanged(res.data.results))
			}
			callback()
		}).catch(err=>{
			//console.log(err)
			callback()
		})
	}
}

export function addressChanged(addresses){
	return {
		type: TYPES.ADDRESS_CHANGED,
		addresses : addresses
	}
}
