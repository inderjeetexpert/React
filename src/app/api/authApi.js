import axios from 'axios'
import Config from '../config'
import {logout} from 'Actions/authActions'
// axios.interceptors.response.use(res=>{
// 	console.log(res)
// 	return res
// },err=>{
// 	//console.log(err)
// 	// localStorage.setItem('loggedIn',false);
// 	// localStorage.setItem('name','Guest');
// 	// window.location.reload()
// })
class authApi {

	//login API call
	static login(email,password){
		let data = {email,password};
		return axios.post(Config.api+'account/login',data).then(res=>{
			return res
		}).catch(err=>{
			return err
		})
	}

	//logout API call
	static logout(){
		return axios.post(Config.api+'account/logout').then(res=>{
			return res
		}).catch(err=>{
			return err
		})
	}

	static isUserExists(email){
		let data={
			email:email
		}
		return axios.post(Config.api+'account/isUserExists',data).then(res=>{
			return res
		}).catch(err=>{
			return err
		})
	}

	static isValidPin(pin){
		let data={
			pin:pin
		}
		return axios.post(Config.api+'account/isValidPin',data).then(res=>{
			return res
		}).catch(err=>{
			return err
		})
	}

	//signup API call
	static signup(userInfo){
		//take only required fields from userInfo
		let data = {
			first_name:userInfo.firstName,
			last_name : userInfo.lastName,
			email : userInfo.email,
			password : userInfo.password,
			phone : userInfo.phone || ''
		}
		return axios.post(Config.api+'account',data).then(res=>{
			return res
		}).catch(err=>{
			return err
		})
	}

	static createSubscription(productId){
		let data = {
			product_id:productId
		}
		return axios.post(Config.api+'subscriptions',data).then(res=>{
			return res
		}).catch(err=>{
			return err
		})
	}

	static createMembersSubscription(userInfo){
		let data = {
			first_name:userInfo.firstName,
			last_name : userInfo.lastName,
			email : userInfo.email,
			phone : userInfo.phone || ''
		}
		return axios.post(Config.api+'account/createMembersSubscription',data).then(res=>{
			return res
		}).catch(err=>{
			return err
		})
	}

}

export default authApi
