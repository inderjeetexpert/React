import React from 'react'
import axios from 'axios';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import './companydetail.css';
import CompanyShortDec from './CompanyShortDec';
import CompanyDetailsTab from './CompanyDetailsTab';
import CompanyTabChangeDetails from './CompanyTabChangeDetails';
import AddNotesForm from './AddNotesForm';

export default class CompanyDetailall extends React.Component {

	constructor(props,context) {
    super(props);
		this.state= {
			data: []
		}

		//console.log(props)
		this.fetchnotes= this.fetchnotes.bind(this)

	}
	fetchnotes(id){
		axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/json'
		axios.get('http://www.carderockllc.com/api/v1/company/notes/?company_id='+id).then(res => {
			//console.log(res.data.results);
			this.setState({ data: res.data.results })
		}).catch(err => {
			console.error(err);
		});
	}

	render() {

		return (
			<div>
					<div className="container-fluid">
							<div className="row">
									<CompanyShortDec />
									<div className="col-md-9 col-sm-5">
											<div className="activity-box">
													<CompanyDetailsTab />
													<AddNotesForm  fetchnotes={this.fetchnotes} />
											</div>
											<CompanyTabChangeDetails fetchnotes={this.fetchnotes} data={this.state.data}/>
									</div>
							</div>
					</div>
			</div>
		);
	}
}
