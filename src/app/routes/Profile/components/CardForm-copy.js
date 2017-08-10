import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { LocalForm, Control, Errors, Field } from 'react-redux-form'
import validator from 'validator'
import Loadable from 'react-loading-overlay'
import Checkbox from 'material-ui/Checkbox'
import CardReactFormContainer from 'card-react'
class CardForm extends React.Component{
	constructor(props){
		super(props)
		this.state={
			savingCard : false,
			number : '',
			name : '',
			cvv : '',
			expiry_date:''
		}
	}

	cc_format(value) {
	  var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
	  var matches = v.match(/\d{4,16}/g);
	  var match = matches && matches[0] || ''
	  var parts = []
	  for (i=0, len=match.length; i<len; i+=4) {
	    parts.push(match.substring(i, i+4))
	  }
	  if (parts.length) {
	    return parts.join(' ')
	  } else {
	    return value
	  }
	}

	handleNameChange = (e)=>{
		this.setState({name:e.target.value})
	}

	handleNumberChange = (e)=>{
		let newCC = this.cc_format(e.target.value)
		this.setState({number:newCC})
		console.log(this.state)
	}
	handleNumberChange = (e)=>{
		this.setState({number:e.target.value})
	}
	handleCvvChange = (e)=>{
		this.setState({cvv:e.target.value})
	}
	handleExpChange = (e)=>{
		this.setState({expiry_date:e.target.value})
	}

	handleChange(values) {
		console.log(values)
		this.setState(values)
	}
  handleUpdate(form) {
	}
  handleSubmit(event) {
		event.preventDefault()
		console.log(this.props)
		this.setState({savingCard:true})
		this.props.saveCard(values,(res)=>{
			if(res.data){
				this.props.getAddresses((res)=>{})
				this.props.handleCloseForm()
			}
			this.setState({savingCard:false})
		})
	}

	render(){

		return(
				<div className="col-md-6 col-md-offset-3 checkout-box add-address">
					<CardReactFormContainer
						container="card-wrapper"
						formInputsNames={
							{
								number: 'CCnumber', // optional — default "number"
								expiry: 'CCexpiry',// optional — default "expiry"
								cvc: 'CCcvc', // optional — default "cvc"
								name: 'CCname' // optional - default "name"
							}
						}
						initialValues= {
							{

							}
						}

						classes={
							{
								valid: 'valid-input', // optional — default 'jp-card-valid'
								invalid: 'invalid-input' // optional — default 'jp-card-invalid'
							}
						}

						formatting={true}
					>
						<div id="card-wrapper"></div>
						<form id="CCForm" onSubmit={this.handleSubmit.bind(this)}>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<div className="row">
											<label htmlFor="name" className="col-md-12">Card Number</label>
											<div className="col-md-12">
												<input placeholder="Card Number" type="text" name="CCnumber" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<div className="row">
											<label htmlFor="name" className="col-md-12">Name</label>
											<div className="col-md-12">
												<input placeholder="Full Name" onChange={this.handleNameChange} type="text" name="CCname" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<div className="row">
											<label htmlFor="name" className="col-md-12">Expires on</label>
											<div className="col-md-12">
												<input placeholder="MM/YY" onChange={this.handleExpChange} type="text" name="CCexpiry" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<div className="row">
											<label htmlFor="name" className="col-md-12">CVC</label>
											<div className="col-md-12">
												<input placeholder="CVC" onChange={this.handleCvvChange} type="text" name="CCcvc" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12">
									<button type="submit" className="btn btn-warning">Save</button>
								</div>
							</div>
						</form>
					</CardReactFormContainer>
				</div>
		)
	}
}

CardForm.propTypes = {
	saveCard : PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch)=>{
	return {
		saveCard : (card,cb)=>dispatch(saveCard(card,cb))
	}
}

export default connect(null,mapDispatchToProps)(CardForm)
