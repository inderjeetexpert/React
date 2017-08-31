import React from 'react'
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table'
import axios from 'axios'
import MoreDetailSection from '../../MoreDetail'
import { LinkContainer } from 'react-router-bootstrap';

export default class ConnectedAccountList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recordcount: 0,
			data: [],
			errorMsg: null,
		}
		this.fetchCampaigns = this.fetchCampaigns.bind(this)
		this.fetchCampaigns()
	}


	handItemChange(event) {
		this.setState({ errorMsg: null });
		this.setState({ errorItem: null });

		this.setState({ item: event.target.value })
	}

	fetchCampaigns() {
	  this.setState({ loadingConnectedAccounts: true })
	  axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
	  axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
	  axios.get('http://www.carderockllc.com/api/v1/google/campaigns/?token=EAAbqZCkO2k6gBAOOupYIlFHumfsBiXSGbkZAkbWkadWZAI1nwZCyuZCS3Y1lFmvDZB0hViAstho4eFDIMMeZCGNwfsQtPRIp1lrZAqaZCvVU3xQDZCDEot2twOZAgLuvPAvZCQMRoE7OM8SEOOmh59WHs3WMqEpHESObhmYbEJVQ9lJ8ZBJxH6qzfCc5eK5pxYVGE2tjjKnkYjJIinwZDZD').then(result => {
			console.log('result')
			console.log('\n')
			console.log('\n')
			console.log('\n')
			console.log(result)
	   this.setState({ loadingConnectedAccounts: false })
		 let data = this.state.data
		 result.data.results.map(d=>{
			 data.push(d)
		 })
	   console.log(data)


	   this.setState({
	    data: data,
	    recordcount: result.data.length
	   })
	   console.log(result.data)
	  }).catch(err => {
	   this.setState({ loadingConnectedAccounts: false })
   //console.log(err)
  })
 }

	render() {
		let loadingConnectedAccounts = null;
		if(this.state.loadingConnectedAccounts){
			loadingConnectedAccounts = (
				<p style={{textAlign:'center'}}>
						<i className="ion-arrow-shrink"></i>
				</p>
			)
		}
		let errorMsg = null;

		return (
			<div>
					{loadingConnectedAccounts}
					<section className="">
							<div className="container-fluid">
									<div className="row">
											<div>
													<div className=''>
															<div className="body-border">
																	<table className="business-table">
																			<thead>
																					<tr>
																							<th width="25%">NAME</th>

																							<th width="25%">Advertising Channel Type</th>
																							<th width="25%">Bidding Strategy Type</th>
																							<th width="25%">Budget</th>
																							<th width="50"> </th>
																					</tr>
																			</thead>
																			<tbody>
																					{this.state.data.map((d,key) => {
																							let image = "images/no-image.png"
																							if (d.image && d.image != '') {
																									image = d.image
																							}

																							let email = "---"
																							if (d.email && d.email != '') {
																									email = d.email
																							}
																							let phone = "---"
																							if (d.phone && d.phone != '') {
																									phone = d.phone
																							}

																							var dialoadRef = "sd" + d.id
																							return (
																									<LinkContainer key={key} className="nav-people" to={"/companyDetail/notes/"+d.id}>
																											<tr >
																													<td>
																													</td>
																													<td></td>
																													<td></td>
																													<td></td>
																													<td><a href=""><i className="ion-share"></i></a></td>
																											</tr>
																									</LinkContainer>
																							)
																					})}
																			</tbody>
																	</table>
															</div>

													</div>
											</div>
									</div>
							</div>
					</section>
			</div>
		);
	}
}
