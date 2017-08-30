import React, { Component } from 'react';
import Topnav from 'Components/Topnav';
import CompanyShortDec from 'Components/CompanyDetailall/CompanyShortDec'
import CompanyDetailsTab from 'Components/CompanyDetailall/CompanyDetailsTab'
import AddNotesFormTask from 'Components/CompanyDetailall/AddNotesFormTask'
import CompanyTabChangeDetailsTask from 'Components/CompanyDetailall/CompanyTabChangeDetailsTask'
import axios from 'axios';

class CompanyDetail extends Component {
	constructor(props, context) {
		super(props, context);
		this.state= {
	data: []
}
this.fetchtask= this.fetchtask.bind(this)
	}

	fetchtask(id){
			axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
			axios.defaults.headers.common['Content-Type'] = 'application/json';
			axios.get('http://www.carderockllc.com/api/v1/company/tasks/?company_id='+id).then(res=>{
				console.log(res.data)
				this.setState({
					data:res.data.results
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
																	<AddNotesFormTask fetchtask={this.fetchtask}/>
															</div>
															<div>
																	<CompanyTabChangeDetailsTask fetchtask={this.fetchtask} data={this.state.data}/>
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
