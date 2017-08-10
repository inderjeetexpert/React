import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import moment from 'moment'
import {deepOrange500,red500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import { LinkContainer } from 'react-router-bootstrap'
import Topnav from 'Components/Topnav'
import history from 'Root/history'
import Config from 'Root/config'
const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500
	},
});

class ProfileHome extends Component {
	constructor(props, context) {
		super(props, context)
		if(!this.props.auth.loggedIn){
			history.push('/login')
		}
	}
	render() {
		let page;
		let nextDay = Config.DeliveryDay; // Monday
		let current = moment();
		let currentDay = current.day();
		if (nextDay <= currentDay)
		nextDay += 7;
		let deliveryDate = current.day(nextDay).format("dddd MMMM Do");
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Topnav/>
					<div className="profile-title">
						<h1>Welcome {this.props.auth.name}</h1>
					</div>
					<div className="container upcomming-delivers">
						<ul className="subscription_settings">
							<li>
								<h2>Your Upcoming Deliveries</h2>
							</li>
							<li>
								<div className="full-width">
									<div className="row">
										<div className="col-md-2">
											<div className="form-group">
												<label className="pull-left">{deliveryDate}</label>
											</div>
										</div>
										<div className="col-md-3 col-xs-12">
											<img src="img/menu-list.jpg" className="img-responsive deliveries-menu"/>
										</div>
										<div className="col-md-3 col-xs-6">
											<div className="form-group">
												<LinkContainer to="delivery/create" className="btn btn-warning btn-lg">
													<a>Choose Meals Now</a>
												</LinkContainer>
											</div>
										</div>
										<div className="col-md-2 col-xs-6">
											<div className="form-group">
												<a className="btn btn-warning btn-lg bg-gray" href="">Skip</a>
											</div>
										</div>
										<div className="col-md-2 col-xs-12">
											<div className="form-group">
												<label className="text-center">On the menu</label>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}
ProfileHome.propTypes = {
	auth : PropTypes.object.isRequired
}

const mapStateToProps = (state)=>{
	return {
		auth : state.auth
	}
}

export default connect(mapStateToProps)(ProfileHome)
