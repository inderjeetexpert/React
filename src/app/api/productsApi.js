import axios from 'axios'
import Config from '../config'

class ProductsApi {
	static getAllProducts(){
		return axios.get(Config.api+'products').then(res=>{
			return res
		}).catch(err=>{
			return err
		})
	}

	static getAllProductsByCat(catId){
		return axios.get(Config.api+'products?category='+catId).then(res=>{
			return res
		}).catch(err=>{
			return err
		})
	}
}

export default ProductsApi
