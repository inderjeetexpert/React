import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { LocalForm, Control, Errors, Field } from 'react-redux-form'
import validator from 'validator'
import Loadable from 'react-loading-overlay'
import Checkbox from 'material-ui/Checkbox'
import Cards from 'react-credit-cards'
import MaskedInput from 'react-maskedinput'
import {saveCard,getCards} from 'Actions/accountActions'
import Config from 'Root/config'


class CardForm extends React.Component{
	constructor(props){
		super(props)
		this.state={
			savingCard : false,
			number : '',
			name : '',
			cvc : '',
			expiry:'',
			focused:'',
			cardOk:false,
		}
	}




	handleInputFocus(e){
    const target = e.target;
    this.setState({
      focused: target.name,
    });
  };

	handleInputChange = (e) => {
    const target = e.target;

    if (target.name === 'number') {
      this.setState({
        [target.name]: target.value.replace(/ /g, ''),
      });
    }
    else if (target.name === 'expiry') {
      this.setState({
        [target.name]: target.value.replace(/ |\//g, ''),
      });
			//target.value=this.formatExpiry(target.value)
    }
    else {
      this.setState({
        [target.name]: target.value,
      });
    }
  };

	handleCallback(type, isValid) {
    //console.log(type, isValid); //eslint-disable-line no-console
		this.setState({cardOk:isValid})
		if(!isValid && this.state.number.length>1){
			this.setState({cardError:'Invalid Card Number'})
		}else{
			this.setState({cardError:null})
		}
  }

	saveCard(card){

	}

  handleSubmit(event) {
		event.preventDefault()
		this.setState({savingCard:true})
		const values = {
			number : this.state.number,
			name : this.state.name,
			exp_month : this.state.expiry.substring(0,2),
			exp_year : this.state.expiry.substring(2,6),
			cvc : this.state.cvc
		}
		const self = this
		self.setState({cardError:null})
		window.Schema.setPublicKey(Config.PublicKey)
		window.Schema.createToken(values,function(status,response){
			if(response.error){
				self.setState({cardError:response.error.message})
				self.setState({savingCard:false})
			}else{
				if(!response.token){
					self.setState({cardError:"Unable to verify your card now. Please try again."})
					self.setState({savingCard:false})
				}else{
					self.props.saveCard(response,(res)=>{
						if(res.data){
							self.props.getCards((res)=>{
								self.setState({savingCard:false})
								self.props.handleCloseForm()
							})
						}
					})
				}
			}
		})

	}

	render(){
		const { name, number, expiry, cvc, focused } = this.state;
		let submitButton=(<button type="button" disabled className="btn btn-warning">Invalid Form</button>)
		if(this.state.cardOk && this.state.name.length>0 && this.state.expiry>0 && this.state.cvc >2){
			submitButton=(<button type="submit" className="btn btn-warning">Save</button>)
		}
		let errorMsg = "";
		if(this.state.cardError){
			errorMsg = <p className="text-danger text-center">{this.state.cardError}</p>
		}
		return(
				<div className="col-md-6 col-md-offset-3 checkout-box add-address">
					<Loadable
						active={this.state.savingCard}
						spinner
						text='Saving Card...'
						color='#ff9800'
					>
						<Cards
							number={number}
							name={name}
							expiry={expiry}
							cvc={cvc}
							focused={focused}
							callback={this.handleCallback.bind(this)}
						/>
						<form id="CCForm" onSubmit={this.handleSubmit.bind(this)}>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<div className="row">
											<label htmlFor="name" className="col-md-12">Card Number</label>
											<div className="col-md-12">
												<MaskedInput placeholder="Card Number" type="text" name="number"
													mask="1111 1111 1111 1111"
													onKeyUp={this.handleInputChange}
													onFocus={this.handleInputFocus}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<div className="row">
											<label htmlFor="name" className="col-md-12">Name</label>
											<div className="col-md-12">
												<input placeholder="Full Name" onChange={this.handleNameChange} type="text" name="name"
													onKeyUp={this.handleInputChange}
													onFocus={this.handleInputFocus}
												/>
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
												<MaskedInput placeholder="MM/YYYY" onChange={this.handleExpChange} type="text" name="expiry"
													mask="11/1111"
													onKeyUp={this.handleInputChange}
													onFocus={this.handleInputFocus}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<div className="row">
											<label htmlFor="name" className="col-md-12">CVC</label>
											<div className="col-md-12">
												<input placeholder="CVC" onChange={this.handleCvvChange} type="text" name="cvc"
													onKeyUp={this.handleInputChange}
													onFocus={this.handleInputFocus}
												/>
											</div>
										</div>
									</div>
								</div>
								{errorMsg}
								<div className="col-md-12">
									{submitButton}
								</div>
							</div>
						</form>
					</Loadable>
				</div>
		)
	}
}

CardForm.propTypes = {
	saveCard : PropTypes.func.isRequired,
	getCards : PropTypes.func.isRequired
}

const mapStateToProps = (state)=>{
	return {

	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		saveCard : (card,cb)=>dispatch(saveCard(card,cb)),
		getCards : (cb)=>dispatch(getCards(cb))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CardForm)
