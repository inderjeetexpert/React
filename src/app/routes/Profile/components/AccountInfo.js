import React from 'react'
import PropTypes from 'prop-types'
class AccountInfo extends React.Component{
	constructor(props){
		super(props)
		this.state={
			loadingAccount: true
		}
	}

	render(){
		return(
				<ul className="subscription_settings">
					<li>
						<h2>Account Details</h2>
					</li>
					<li>
						<div className="full-width">
							<div className="row">
								<div className="col-md-4">
									<div className="form-group has-feedback">
										<label className="col-sm-4 control-label">First Name</label>
										<div className="col-sm-8">
											<input type="text" value={this.props.user.first_name} className="form-control" disabled aria-describedby="inputSuccess2Status"/>

										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group has-feedback">
										<label className="col-sm-4 control-label">Last Name</label>
										<div className="col-sm-8">
											<input type="text" value={this.props.user.last_name} className="form-control" disabled aria-describedby="inputSuccess2Status"/>

										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group has-feedback">
										<label className="col-sm-5 control-label">Phone Number</label>
										<div className="col-sm-7">
											<input type="text" value={this.props.user.phone} className="form-control" disabled aria-describedby="inputSuccess2Status"/>

										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group has-feedback">
										<label className="col-sm-4 control-label">Email</label>
										<div className="col-sm-8">
											<input type="text" value={this.props.user.email} className="form-control" disabled aria-describedby="inputSuccess2Status"/>

										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li className="tab-body">
						<div className="full-width">
							<button className="btn-orange" onClick={this.props.setToEditMode}>Edit <i className="fa fa-fw fa-edit"></i></button>
						</div>
					</li>
				</ul>
		)
	}
}

AccountInfo.propTypes = {
	user : PropTypes.object.isRequired
}


export default AccountInfo
