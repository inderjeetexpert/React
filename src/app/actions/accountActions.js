import * as TYPES from './actionTypes'
import validator from 'validator'
import accountApi from '../api/accountApi'

export function saveAccount(account,errorHandler){
	return function(dispatch){
		return accountApi.saveAccount(account).then(res=>{
			errorHandler(res);
			if(res.data){
				return function(dispatch){
					dispatch(accountChanged({}))
				}
			}
		}).catch(err=>{
			errorHandler(err)
		})
	}

}

export function saveCard(card,errorHandler){
	return function(dispatch){
		return accountApi.saveCard(card).then(res=>{
			errorHandler(res)
		}).catch(err=>{
			errorHandler(err)
		})
	}
}

export function getAccount(callback){
	return function(dispatch){
		return accountApi.getAccount().then(res=>{
			if(res.data){
				dispatch(accountChanged(res.data))
			}
			callback(res.data)
		}).catch(err=>{
			console.log(err)
			callback()
		})
	}
}

export function getCards(callback){
	return function(dispatch){
		return accountApi.getCards().then(res=>{
			if(res.data.results){
				dispatch(cardsChanged(res.data.results))
				callback({success:true})
			}else{
				callback({success:false,message:"No Cards Found"})
			}
		}).catch(err=>{
			callback(err)
		})
	}
}

export function getSubscription(callback){
	return function(dispatch){
		return accountApi.getSubscription().then(res=>{
			if(res.data.results){
				dispatch(subscriptionChanged(res.data.results[0]))
				callback({success:true})
			}
		}).catch(err=>{})
	}
}

export function cancelSubscription(callback){
	return function(dispatch){
		return accountApi.cancelAllDeliveries().then(res=>{
			callback({success:true})
		}).catch(err=>{
			callback({success:false})
		})
	}
}



export function accountChanged(user){
	return {
		type: TYPES.ACCOUNT_CHANGED,
		user:user
	}
}

export function cardsChanged(cards){
	return {
		type: TYPES.CARDS_CHANGED,
		cards:cards
	}
}

export function subscriptionChanged(subscription){
	return {
		type : TYPES.SUBSCRIPTION_CHANGED,
		subscription:subscription
	}
}
