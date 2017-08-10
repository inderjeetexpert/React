import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import validator from 'validator'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { LocalForm, Control, Errors, Field, actions } from 'react-redux-form'
import Loadable from 'react-loading-overlay'
import {defaultStyles} from './style'
import {submitUserDetails,createSubscription,createMembersSubscription} from 'Actions/signupActions'
import {saveAddress} from 'Actions/addressActions'
import {saveDelivery} from 'Actions/deliveryActions'
import {purge} from '../../store/configureStore'
import history from 'Root/history'

class UserInfo extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			savingAddress : false
		}
	}

	attachDispatch(dispatch) {
    this.formDispatch = dispatch;
  }

	changePostalCode() {
    this.formDispatch(actions.change('user.postalCode', this.props.userInfo.postalCode));
  }

	handleChange(values) {
	}
  handleUpdate(form) {
	}
  handleSubmit(values) {
		this.setState({savingAddress:true})
		this.props.submitUserDetails(values,(res)=>{
			if(!res.success){
				this.setState({commonErr:<p className="text-danger"><strong>Critical Error: </strong>{res.message}</p>})
				this.setState({savingAddress:false})
			}else{
				//purge()
				this.handleSaveAddress(values)
				this.props.createMembersSubscription(values,res=>{
					//console.log(res)
				})
			}

		})
	}

	handleSaveAddress(userInfo){
		let address={
			name : userInfo.firstName+" "+userInfo.lastName,
			address1: userInfo.address,
			address2:userInfo.address2,
			city : userInfo.city,
			state: userInfo.state,
			zip : userInfo.postalCode,
			phone: userInfo.phone,
			deliveryInstruction: userInfo.deliveryInstruction,
			isPrime:true
		}
		this.props.saveAddress(address,(res)=>{
			this.setState({savingAddress:false})
			this.handleSaveDelivery()
		})
	}

	handleSaveDelivery = () =>{
		let subscription= {}
		let products= Object.assign({}, this.props.selectedProducts)

		subscription.items=[]
		let maxProduct = parseInt(this.props.finalSubscription.meta_description)||0
		Object.keys(products).forEach(key=>{
			const len=subscription.items.length
			let data={}
			if(len<maxProduct){
				data.product_id = products[key].id
				data.description = products[key].name
				data.price = 0
				data.quantity = 1
				subscription.items.push(data)
			}
		})
		subscription.product_id=this.props.finalSubscription.id
		this.setState({savingAddress:true})
		this.props.saveDelivery(subscription,res=>{
			this.setState({savingAddress:false})
			history.push('/profile/payment');
		})
	}

	componentDidMount(){
		const self = this
		setTimeout(function () {
			if(self.props.userInfo.postalCode){
				self.changePostalCode()
			}
		}, 1000);

	}



	render(){
		const inputProps = {
      value: this.state.address,
      onChange: this.onAddressChange,
			placeholder: 'Address',
    }


		return(
			<div className="wekly-bg checkout-box checkout">
				<Loadable
					active={this.state.savingAddress}
					spinner
					text='Saving details...'
					color='#E8500E'
				>
					<div className="row">
						{this.state.commonErr}
						<LocalForm
							onUpdate={(form) => this.handleUpdate(form)}
							onChange={(values) => this.handleChange(values)}
							onSubmit={(values) => this.handleSubmit(values)}
							initialState={this.props.userInfo}
							model="user"
							getDispatch={(dispatch) => this.attachDispatch(dispatch)}
							className="form-horizontal"
						>
							<div className="col-md-6">
								<div className="form-group">
									<Control.text className="form-control" placeholder="First Name" model=".firstName"
										validators={{
											required:(val)=> val && val.length>2
										}}
									/>
									<Errors className="text-danger" model=".firstName"
										messages={{
											required: 'First name is required.'
										}}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<Control.text className="form-control" placeholder="Last Name" model=".lastName"
									/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<Control.text className="form-control" placeholder="Address" model=".address"
										validators={{
											required:(val)=> val && val.length>2
										}}
									/>
									<Errors className="text-danger" model=".address"
										messages={{
											required: 'Address is required.'
										}}/>
								</div>
							</div>
							<div className="col-md-8">
								<div className="form-group">
									<Control.text className="form-control" placeholder="Address" model=".address2"
									/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group">
									<Control.text className="form-control" placeholder="Phone" model=".phone"
										validators={{
											required:(val)=> val && val.length>2
										}}
									/>
									<Errors className="text-danger" model=".phone"
										messages={{
											required: 'Phone is required.'
										}}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group">
									<Control.text className="form-control" placeholder="City" model=".city"
										validators={{
											required:(val)=> val && val.length>2
										}}
									/>
									<Errors className="text-danger" model=".city"
										messages={{
											required: 'City is required.'
										}}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group">
									<Control.text className="form-control" placeholder="Province" model=".province"
										validators={{
											required:(val)=> val && val.length>2
										}}
									/>
									<Errors className="text-danger" model=".province"
										messages={{
											required: 'Province is required.'
										}}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group">
									<Control.text className="form-control" placeholder="Postal Code" model=".postalCode"
										validators={{
											required:(val)=> val && val.length>2
										}}
									/>
									<Errors className="text-danger" model=".postalCode"
										messages={{
											required: 'Postal Code is required.'
										}}/>
								</div>
							</div>

							<div className="col-md-12">
								<div className="form-group">
									<Control.text className="form-control" placeholder="Delivery Instructions" model=".deliveryInstruction"
									/>
								</div>
							</div>

							<div className="col-md-6">
								<div className="form-group">
									<Control type="text" className="form-control" placeholder="Password" model=".password"
										validators={{
											required:(val)=> val && val.length>2
										}}
									/>
									<Errors className="text-danger" model=".password"
										messages={{
											required: 'Password is required.'
										}}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<button className="btn btn-warning btn-lg">Next</button>
								</div>
							</div>
						</LocalForm>
					</div>
				</Loadable>
			</div>

		)
	}
}

UserInfo.propTypes = {
	userInfo : PropTypes.object.isRequired,
	submitUserDetails : PropTypes.func.isRequired,
	createSubscription : PropTypes.func.isRequired,
	createMembersSubscription : PropTypes.func.isRequired
}

const mapStateToProps = (state)=>{
	return{
		userInfo : state.signup.userInfo,
		finalSubscription : state.selectedSubscription,
		selectedProducts : state.selectedProducts,
		delivery : state.delivery
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		submitUserDetails : (userInfo,errorHandler)=>dispatch(submitUserDetails(userInfo,errorHandler)),
		createSubscription : (productId)=>dispatch(createSubscription(productId)),
		createMembersSubscription : (userInfo,errorHandler)=>dispatch(createMembersSubscription(userInfo,errorHandler)),
		saveAddress : (address,cb)=>dispatch(saveAddress(address,cb)),
		saveDelivery : (delivery,cb)=>dispatch(saveDelivery(delivery,cb))
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(UserInfo)
