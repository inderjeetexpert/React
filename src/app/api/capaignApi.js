import axios from 'axios'
import Config from '../config'

class googleApi {

	//get Account
	static getAccounts(){
		return axios.get(Config.api+'account').then(res=>{
			return res
		}).catch(res=>{
			return err
		})
	}

	//save Account
	static addCampaign(campaign){
		const data={
			first_name: campaign.first_name||'',
			last_name: campaign.last_name||'',
			phone: campaign.phone ||''
		}

		axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.post('http://www.carderockllc.com/api/v1/google/campaigns/?token={2}',data).then(response => {
			 console.log(response.data)
			}).catch(err => {
		 console.log(err)
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

}

export default accountApi
