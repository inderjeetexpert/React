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

export default class CampaignList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
		this.fetchCampaigns()
	}

	fetchCampaigns = () => {
	  axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
	  axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
	  axios.get('http://www.carderockllc.com/api/v1/google/campaigns/?token={2}').then(result => {
	   console.log(result.data)
	  }).catch(err => {
   console.log(err)
  })
 }

	render() {

		return (
			<div>
    {/* Content here */}
			</div>
		);
	}
}
