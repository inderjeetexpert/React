import React, { Component } from 'react';
import Topnav from 'Components/Topnav';
import axios from 'axios';
import moment from 'moment';
import CompanyShortDec from 'Components/CompanyDetailall/CompanyShortDec'
import CompanyDetailsTab from 'Components/CompanyDetailall/CompanyDetailsTab'
import AddNotesFormActivity from 'Components/CompanyDetailall/AddNotesFormActivity'
import CompanyTabChangeDetailsActivity from 'Components/CompanyDetailall/CompanyTabChangeDetailsActivity'


class CompanyDetail extends Component {
	constructor(props, context) {
super(props, context);
this.state= {
	data: []
}

this.fetchactivity= this.fetchactivity.bind(this)
}

fetchactivity(id){
		axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/json';
		axios.get('http://www.carderockllc.com/api/v1/company/activities/?company_id='+id).then(res=>{
			console.log(res.data)
			this.setState({
				data:res.data.results
				//data: res.data.results[0]
			//	results: res.data.results[0]
			})
		}).catch(err=>{
			console.error(err);
		});
	}

	render() {
		return (
			<div>
					<Topnav />
					<div className="innerbody">
							<div>
									<div className="container-fluid">
											<div className="row">
													<CompanyShortDec />
													<div className="col-md-9 col-sm-5">
															<div className="activity-box">
																	<CompanyDetailsTab />
																	<AddNotesFormActivity fetchactivity={this.fetchactivity}/>
															</div>
															<div>
																	<CompanyTabChangeDetailsActivity fetchactivity={this.fetchactivity} data={this.state.data} />
															</div>
													</div>
											</div>
									</div>
							</div>
					</div>
			</div>
		);
	}
}

export default CompanyDetail;
