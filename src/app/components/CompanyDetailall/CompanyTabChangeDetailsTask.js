import React from 'react';
import './companydetail.css';
import axios from 'axios';
import moment from 'moment';
class CompanyTabChangeDetailsTask extends React.Component {
	constructor(props) {
		super(props)
		let url = window.location.hash.split('/')
		const id=url[url.length-1]
    //console.log(company_id);
		this.state={
			id,
		 data : [],
		 results:''
		}

		this.props.fetchtask(id);

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
											{this.props.data.map((d,key) => {
													let tasknote = "N/A"

													if (d.task_notes && d.task_notes != '') {
															tasknote = d.task_notes
													}
													let tasks = "N/A"

													if (d.task && d.task != '') {
															tasks = d.task
													}
													let starttime = "N/A"

													if (d.start_time && d.start_time != '') {
															starttime = d.start_time
													}
													let endtime = "N/A"

													if (d.end_time && d.end_time != '') {
															endtime = d.end_time
													}

													let dateC= moment(d.due_date);

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
																	<span><img src="images/calendar-blank.svg" /> {dateC.format('MMM Do YY')} <img src="images/clock.svg" /> {starttime} To {endtime} </span>
																	<b>{tasks}</b>
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
