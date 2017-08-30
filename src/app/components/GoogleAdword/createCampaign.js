import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import SkyLight from 'react-skylight';
import Autocomplete from 'react-google-autocomplete';

class CreateCampaign extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			campaignObj: {}
		}
	}

	postCampaignData(event) {
		event.preventDefault()
		let self = this
		let data = self.state.campaignObj
		console.log(data);
	  axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
	  axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
	  axios.post('http://www.carderockllc.com/api/v1/google/campaigns/?token={2}',data).then(response => {
	   console.log(response.data)
	  }).catch(err => {
   console.log(err)
  })
 }

 handleChange(e) {
	 let self = this
	 let obj = self.state.campaignObj
	 obj[e.target.name] = e.target.value
 }


	render() {

		return (
			<div className="container" style={{ marginTop: 100, marginBottom: 150 }}>
				<div className="col-md-4 col-md-offset-4">
					<form onSubmit={(event) => this.handleLogin(event)}>
						<h4 className="text-center" style={{ color: '#68a6ff' }}>Create Campaign</h4><br />
						<div className="form-group">
							<label htmlFor="exampleInputname">Name</label>
							<input onChange={(event) => this.handleChange(event)} name="name" type="text" className="form-control" id="exampleInputname" placeholder="Name" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputChannel">Advertising Channel Type</label>
							<input onChange={(event) => this.handleChange(event)} name="advertisingChannelType" type="text" className="form-control" id="exampleInputChannel" placeholder="Advertising Channel Type" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputBiding">Bidding Strategy Type</label>
							<input onChange={(event) => this.handleChange(event)} name="biddingStrategyType" type="text" className="form-control" id="exampleInputBiding" placeholder="Bidding Strategy Type" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputBudget">Budget</label>
							<input onChange={(event) => this.handleChange(event)} name="budget" type="number" className="form-control" id="exampleInputBudget" placeholder="Budget" />
						</div>

						<div className="text-center">
							<button type="submit" onClick={(event) => this.postCampaignData(event)} className="btn btn-block btn-lg btn-primary">Create</button>
						</div>
						</form>
					</div>
				</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCampaign)
