import * as TYPES from './actionTypes'
import validator from 'validator'
import authApi from '../api/authApi'
import {authStateChanged} from './authActions'
import {saveAddress} from './addressActions'

function isValidUsCode(postalCode){
	return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(postalCode)
}
function isValidCanadianCode(postalCode){
	return /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/.test(postalCode)
}
export function submitUserInfo(email,postalCode,errorHandler){
	if(validator.isEmpty(email) || validator.isEmpty(postalCode)){
		errorHandler({success:false,message:'Email or Postal Code is blank'})
		return function(dispatch){
			dispatch(incompleteEmail(true))
		}
	}
	if(!validator.isEmail(email)){
		errorHandler({success:false,message:'Invalid email'})
		return function(dispatch){
			dispatch(incompleteEmail(true))
		}
	}

	if(!isValidUsCode(postalCode) && !isValidCanadianCode(postalCode)){
		errorHandler({success:false,message:'Invalid Postal Code'})
		return function(dispatch){
			dispatch(incompleteEmail(true))
		}
	}

	return function(dispatch){
		return authApi.isValidPin(postalCode).then(res=>{
			if(!res.data.isValid){
				errorHandler({success:false,code:'NOT_SERVING',message:"Oh No! We currently don't deliver to your area but we'll let you know when we do."})
			}else{
				authApi.isUserExists(email).then(res=>{
					if(res.data.emailRegistered===true){
						errorHandler({success:false,message:'Email already registered'})
						dispatch(incompleteEmail(true))
					}else{
						let userInfo={
								email : email,
								postalCode : postalCode
							}
						errorHandler({success:true})
						dispatch(emailFilled(userInfo))
						dispatch(incompleteEmail(false))
						dispatch(changeTab('tab2'))
					}
				}).catch(err=>{
					return function(dispatch){
						dispatch(incompleteEmail(true))
					}
				})
			}
		}).catch(err=>{})
	}



}

export function createSubscription(productId){
	authApi.createSubscription(productId).then(res=>{
		console.log(res)
	}).catch(err=>{
		console.log(err)
	})
}

export function submitDetails(userInfo,errorHandler){
	if(validator.isEmpty(email) || validator.isEmpty(postalCode)){
		errorHandler({success:false,message:'Email or Postal Code is blank'})
		return function(dispatch){
			dispatch(incompleteEmail(true))
		}
	}
	if(!validator.isEmail(email)){
		errorHandler({success:false,message:'Invalid email'})
		return function(dispatch){
			dispatch(incompleteEmail(true))
		}
	}

	if(!isValidUsCode(postalCode) && !isValidCanadianCode(postalCode)){
		errorHandler({success:false,message:'Invalid Postal Code'})
		return function(dispatch){
			dispatch(incompleteEmail(true))
		}
	}
	return function(dispatch){
		errorHandler({success:true})
		dispatch(emailFilled(userInfo))
		dispatch(incompleteEmail(false))
		dispatch(changeTab('tab2'))
	}
}

export function submitUserDetails(userInfo,errorHandler){
	return function(dispatch){
		return authApi.isValidPin(userInfo.postalCode).then(res=>{
			if(!res.data.isValid){
				errorHandler({success:false,message:"Oh No! We currently don't deliver to your area but we'll let you know when we do."})
			}else{
				authApi.signup(userInfo).then(res=>{
					if(res.data && res.data.errors){
						let message="Something went wrong. please try again!"
						if(res.data.errors.email && res.data.errors.email.code === 'UNIQUE'){
							message='This email is already registered with us. Please login or change email.'
						}
						if(res.data.errors.email && res.data.errors.email.code === 'REQUIRED'){
							message='You have forgot to submit your email. Please go to step 1 of signup.'
						}
						errorHandler({success:false,message:message})
					}else{
						localStorage.setItem('loggedIn',true)
						localStorage.setItem('name',res.data.name)
						errorHandler({success:true,user:res.data})
						dispatch(authStateChanged(res.data))
						dispatch(userFormComplete(userInfo))
					}
				}).catch(err=>{
					throw(err)
				})
			}
		}).catch(err=>{})

	}
}

export function createMembersSubscription(userInfo,errorHandler){
	return function(dispatch){
		return authApi.createMembersSubscription(userInfo).then(res=>{
			errorHandler(res)
		}).catch(err=>{
			errorHandler(err)
		})
	}
}

export function userFormComplete(userInfo,errorHandler){
	return {
		type: TYPES.USER_FORM_COMPLETE,
		userInfo
	}
}

export function emailFilled(userInfo){
	return {
		type:TYPES.EMAIL_FILLED,
		userInfo
	}
}
export function incompleteEmail(value){
	return {
		type:TYPES.INCOMPLETE_EMAIL,
		value
	}
}
export function changeTab(tabName){
	return {
		type:TYPES.TAB_CHANGE,
		tabName
	}
}
