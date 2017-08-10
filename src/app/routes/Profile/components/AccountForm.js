import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { LocalForm, Control, Errors, Field } from 'react-redux-form'
import validator from 'validator'
import {saveAccount,getAccount} from 'Actions/accountActions'
import {authStateChanged} from 'Actions/authActions'
import Loadable from 'react-loading-overlay'
import Checkbox from 'material-ui/Checkbox'
class AccountForm extends React.Component{
	constructor(props){
		super(props)
		this.state={
			savingAccount : false
		}
	}

	handleChange(values) {
	}
  handleUpdate(form) {
	}
  handleSubmit(values) {
		this.setState({savingAccount:true})
		this.props.saveAccount(values,(res)=>{
			this.setState({savingAccount:false})
			this.props.getAccount((res)=>{
				localStorage.setItem('name',res.name)
				this.props.authStateChanged()
				this.props.cancelEditMode()
			})
		})
	}

	render(){
		return(
				<Loadable
					active={this.state.savingAccount}
					spinner
					text='Saving Info...'
					color='#ff9800'
				>
					<LocalForm
						onUpdate={(form) => this.handleUpdate(form)}
						onChange={(values) => this.handleChange(values)}
						onSubmit={(values) => this.handleSubmit(values)}
						initialState={this.props.user}
						className="form-horizontal"
					>
						<ul className="subscription_settings">
							<li>
								<h2>Edit Account Details</h2>
							</li>
							<li>
								<div className="full-width">
									<div className="row">
										<div className="col-md-4">
											<div className="form-group has-feedback">
												<label className="col-sm-4 control-label">First Name</label>
												<div className="col-sm-8">
													<Control.text className="form-control" placeholder="First Name" model=".first_name"
														validators={{
															required:(val)=> val && val.length>2
														}}
													/>
													<Errors className="text-danger" model=".name"
														messages={{
															required: 'First name is required.'
														}}/>
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div className="form-group has-feedback">
												<label className="col-sm-4 control-label">Last Name</label>
												<div className="col-sm-8">
													<Control.text className="form-control" placeholder="First Name" model=".last_name"
													/>
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div className="form-group has-feedback">
												<label className="col-sm-5 control-label">Phone Number</label>
												<div className="col-sm-7">
													<Control.text className="form-control" placeholder="First Name" model=".phone"
														validators={{
															required:(val)=> val && val.length>2
														}}
													/>
													<Errors className="text-danger" model=".name"
														messages={{
															required: 'Phone is required.'
														}}/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="tab-body">
								<div className="full-width">
									<button className="btn-orange" type="submit">Save Changes</button>
									<button className="btn-gray" type="button" onClick={this.props.cancelEditMode}>Cancel</button>
								</div>
							</li>
						</ul>
					</LocalForm>
				</Loadable>
		)
	}
}

AccountForm.propTypes = {
	saveAccount : PropTypes.func.isRequired,
	getAccount: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch)=>{
	return {
		saveAccount : (account,cb)=>dispatch(saveAccount(account,cb)),
		getAccount : (cb)=>dispatch(getAccount(cb)),
		authStateChanged : ()=>dispatch(authStateChanged())
	}
}

export default connect(null,mapDispatchToProps)(AccountForm)
