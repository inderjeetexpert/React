import React from 'react';
import './companydetail.css';
import axios from 'axios';
import moment from 'moment';
class CompanyTabChangeDetailsTask extends React.Component {
	constructor(props) {
		super(props)
		let url = window.location.hash.split('/')
		const company_id=url[url.length-1]
    console.log(company_id);
		this.state={
			company_id,
		 data : [],
		 results:''
		}
		axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/json';
		axios.get('http://www.carderockllc.com/api/v1/company/tasks/?company_id='+company_id).then(res=>{
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

					<div className="note-box">
							<ul>
									<li>
											<img src="images/task.svg" />
									</li>
									<li>
											<h5>My Tasks <a href="" className="pull-right"><img src="images/filter.svg" /></a></h5>
											<h6>AUG 2017</h6>
											{this.state.data.map((d,key) => {
													let tasknote = "N/A"

													if (d.task_notes && d.task_notes != '') {
															tasknote = d.task_notes
													}
													let name= d.user.split(' ').map(u=>{
															u= u.toUpperCase();
															return u[0];
													}).join('')
													return (
															<div className="notes-list" key={d.id}>
																	<a href="" className="pull-right"><img src="images/overflow-horizontal.svg" /></a>
																	<div className="name">
																			{name}
																	</div>
																	<span><img src="images/calendar-blank.svg" /> Aug 07 2017     <img src="images/clock.svg" /> 9:00am To 5:00 pm </span>
																	<b>Untitled</b>
																	<p>{tasknote}</p>
															</div>
													)
											})}

									</li>
							</ul>
					</div>


		)
	}
}


export default CompanyTabChangeDetailsTask;
