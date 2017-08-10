import axios from 'axios'
import Config from '../config'

class accountApi {

	//get Account
	static getAccount(){
		return axios.get(Config.api+'account').then(res=>{
			return res
		}).catch(res=>{
			return err
		})
	}

	//save Account
	static saveAccount(user){
		const data={
			first_name:user.first_name||'',
			last_name:user.last_name||'',
			phone : user.phone ||''
		}
		return axios.put(Config.api+'account',data).then(res=>{
			return res
		}).catch(err=>{
			return err
		})
	}

	//Save address
	static saveAddress(address){
		return axios.post(Config.api+'account/addresses',address).then(res=>{
			return res
		}).catch(err=>{
			return err
		})
	}

	//get all addresses of logged in users
	static getAddresses(){
		return axios.get(Config.api+'account/addresses').then(res=>{
			return res
		}).catch(err=>{
			console.log(err)
			//return err
		})
	}

	//get all cards of logged in users
	static getCards(){
		return axios.get(Config.api+'account/cards').then(res=>{
			return res
		}).catch(err=>{
			return err
		})
	}

	static saveCard(card){
		return this.removeAllCards().then(res=>{
			return axios.post(Config.api+'account/cards',card).then(res=>{
				return res
			}).catch(err=>{
				return err
			})
		}).catch(err=>{
			return err
		})

	}

	static removeAllCards(){
		return axios.get(Config.api+'account/removeAllCards').then(res=>{
			return res;
		}).catch(err=>{
			return err;
		})
	}

	static cancelAllDeliveries(){
		return axios.get(Config.api+'subscription/clear').then(res=>{
			return res
		}).catch(err=>{
			return err
		})
	}

	static saveDelivery(delivery){
		return this.cancelAllDeliveries().then(res=>{
			return axios.post(Config.api+'subscriptions',delivery).then(res=>{
				return res
			}).catch(err=>{
				return err
			})
		}).catch(err=>{
			return err
		})
	}

	static getSubscription(){
		return axios.get(Config.api+'subscriptions').then(res=>{
			return res
		}).catch(err=>{
			return err
		})
	}



}

export default accountApi
