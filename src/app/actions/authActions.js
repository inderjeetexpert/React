import authApi from '../api/authApi'
import * as TYPES from './actionTypes'
import history from 'Root/history'
export function login(email,password,errorHandler){
	return function(dispatch){
		dispatch(authStateBusy());
		return authApi.login(email,password).then(user=>{
			if(!user.data){
				errorHandler({success:false,message:'Invalid email or password!'})
			}else{
				localStorage.setItem('loggedIn',true);
				localStorage.setItem('name',user.data.name);
				errorHandler({success:true,user:user.data})
			}
			dispatch(authStateChanged(user))
		}).catch(err=>{
			throw(err)
		})
	}
}

export function logout(){
	return function(dispatch){
		dispatch(authStateBusy());
		return authApi.logout().then(res=>{
			if(res.data.success){
				localStorage.setItem('loggedIn',false);
				localStorage.setItem('name','Guest');
				let auth = {
					loggedIn : false,
					name : 'Guest',
					busy : false
				}
				dispatch(authStateChanged(auth))
				history.push('/')
				window.location.reload()
			}
		}).catch(err=>{
			throw(err)
		})
	}
}

export function authStateChanged(auth){
	return {
		type:TYPES.AUTH_STATE_CHANGED,
		auth
	}
}

export function authStateBusy(){
	return {
		type : TYPES.AUTH_STATE_BUSY
	}
}
