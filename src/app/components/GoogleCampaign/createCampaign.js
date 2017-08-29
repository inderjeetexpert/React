import React from 'react'
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import axios from 'axios';
import SkyLight from 'react-skylight';
import Autocomplete from 'react-google-autocomplete';

export default class CreateCampaign extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	createCampaign = () => {
    let data = {
      name: 'name',
      advertisingChannelType: 'SEARCH',
      biddingStrategyType: 'MANUAL_CPC'
      budget: 50000
    }
	  axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
	  axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
	  axios.post('http://www.carderockllc.com/api/v1/google/campaigns/?token={2}',data).then(response => {
	   console.log(response.data)
	  }).catch(err => {
   console.log(err)
  })
 }

	render() {

		return (
			<div>
				{/* Campaign create form */}
			</div>
		);
	}
}
