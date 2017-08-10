import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { LocalForm, Control, Errors, Field, actions } from 'react-redux-form'
import validator from 'validator'
import {saveAddress} from 'Actions/addressActions'
import Loadable from 'react-loading-overlay'
import Checkbox from 'material-ui/Checkbox'
import authApi from 'Api/authApi'
class AddressForm extends React.Component{
	constructor(props){
		super(props)
		this.state={
			savingAddress : false,
			errMessage:null
		}
	}

	handleChange(values) {
	}
  handleUpdate(form) {
	}
  handleSubmit(values) {
		this.setState({savingAddress:true})
		return authApi.isValidPin(values.zip).then(res=>{
			if(!res.data.isValid){
				this.setState({savingAddress:false,errMessage:"We currently don't deliver to this postal code."})
			}else{
				this.setState({errMessage:null})
				this.props.saveAddress(values,(res)=>{
					if(res.data){
						this.props.getAddresses((res)=>{})
						this.props.handleCloseForm()
					}
					this.setState({savingAddress:false})
				})
			}
		}).catch(err=>{})
	}



	render(){
		const isValidUsCode=(postalCode)=>{
			return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(postalCode)
		}
		const isValidCanadianCode=(postalCode)=>{
			return /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/.test(postalCode)
		}
		const isValidPin=(postalCode)=>{
			if(postalCode.length>0){
				if(!isValidUsCode(postalCode) && !isValidCanadianCode(postalCode)){
					return false
				}
			}
			return true
		}
		let errMessage=null
		if(this.state.errMessage){
			errMessage=(
				<p className="text-danger text-center">{this.state.errMessage}</p>
			)
		}
		return(
				<div className=" col-md-6 col-md-offset-3 checkout-box add-address">
					<Loadable
						active={this.state.savingAddress}
						spinner
						text='Saving address...'
						color='#ff9800'
					>
						<LocalForm
							onUpdate={(form) => this.handleUpdate(form)}
							onChange={(values) => this.handleChange(values)}
							onSubmit={(values) => this.handleSubmit(values)}
							initialState={this.props.address}
							className="form-horizontal"
						>
							<fieldset>
								<div className="form-group col-md-12">
									<div className="row">
										<label htmlFor="name" className="col-md-12">Name</label>
										<div className="col-md-12">
											<Control.text className="form-control" placeholder="Full Name" model=".name"
												validators={{
													required:(val)=> val && val.length>2
												}}
											/>
											<Errors className="text-danger" model=".name"
												messages={{
													required: 'Full name is required.'
												}}/>
										</div>
									</div>
								</div>
								<div className="form-group col-md-12">
									<div className="row">
										<label htmlFor="name" className="col-md-12">Address</label>
										<div className="col-md-12">
											<Control.text className="form-control" placeholder="Address" model=".address1"
												validators={{
													required:(val)=> val && val.length>2
												}}
											/>
											<Errors className="text-danger" model=".address1"
												messages={{
													required: 'Address is required.'
												}}/>
										</div>
									</div>
								</div>
								<div className="form-group col-md-12">
									<div className="row">
										<label htmlFor="name" className="col-md-12">Address 2</label>
										<div className="col-md-12">
											<Control.text className="form-control" placeholder="App/Suit" model=".address2"
											/>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<div className="row">
											<label htmlFor="name" className="col-md-12">City</label>
											<div className="col-md-12">
												<Control.text className="form-control" placeholder="City" model=".city"
													validators={{
														required:(val)=> val && val.length
													}}
												/>
												<Errors className="text-danger" model=".city"
													messages={{
														required: 'City is required.'
													}}/>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<div className="row">
											<label htmlFor="name" className="col-md-12">Province</label>
											<div className="col-md-12">
												<Control.text className="form-control" placeholder="Province" model=".state"
													validators={{
														required:(val)=> val && val.length
													}}
												/>
												<Errors className="text-danger" model=".state"
													messages={{
														required: 'Province is required.'
													}}/>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<div className="row">
											<label htmlFor="name" className="col-md-12">Postal Code</label>
											<div className="col-md-12">
												<Control.text className="form-control" placeholder="Postal Code" model=".zip"
													validators={{
														required:(val)=> val && val.length,
														isValidPin:(val)=> isValidPin(val)
													}}
												/>
												<Errors className="text-danger" model=".zip"
													messages={{
														required: 'Postal Code is required.',
														isValidPin:'Invalid Postal Code'
													}}/>
												{errMessage}
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<div className="row">
											<label htmlFor="name" className="col-md-12">Phone</label>
											<div className="col-md-12">
												<Control.text className="form-control" placeholder="Phone" model=".phone"
													validators={{
														required:(val)=> val && val.length
													}}
												/>
												<Errors className="text-danger" model=".phone"
													messages={{
														required: 'Phone is required.'
													}}/>
											</div>
										</div>
									</div>
								</div>
								<div className="form-group col-md-12">
									<div className="row">
										<label htmlFor="name" className="col-md-12">Delivery Instructions</label>
										<div className="col-md-12">
											<Control.text className="form-control" placeholder="Optional" model=".deliveryInstruction"
											/>
										</div>
									</div>
								</div>
								<div className="form-group col-md-12">
									<div className="row">
										<div className="col-md-6">
											<button type="button" className="btn-gray" onClick={this.props.handleCloseForm}>
												Cancel
											</button>
										</div>
										<div className="col-md-6">
											<button type="submit" className="btn-orange">
												Save Address!
											</button>
										</div>
									</div>
								</div>
							</fieldset>
						</LocalForm>
					</Loadable>
				</div>
		)
	}
}

AddressForm.propTypes = {
	saveAddress : PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch)=>{
	return {
		saveAddress : (address,cb)=>dispatch(saveAddress(address,cb))
	}
}

export default connect(null,mapDispatchToProps)(AddressForm)
