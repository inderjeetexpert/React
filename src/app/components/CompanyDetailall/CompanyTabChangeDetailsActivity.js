import React from 'react';
import './companydetail.css';
import axios from 'axios';
import moment from 'moment';
class CompanyTabChangeDetailsActivity extends React.Component {
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


		this.props.fetchactivity(id);


	}

	render() {


		return (

					<div className="note-box">
							<ul>
									<li>
											<img src="images/stop-watch.svg" />
									</li>
									<li>
											<h5>My Activity <a href="" className="pull-right"><img src="images/filter.svg" /></a></h5>
											<h6>AUG 2017</h6>
											{this.props.data.map((d,key) => {
													let describ = "N/A"

													if (d.description && d.description != '') {
															describ = d.description
													}

													let subject = "Untitled"

													if (d.subject && d.subject != '') {
															subject = d.subject
													}

													let dateC= moment(d.created_at);


													let name= d.user.split(' ').map(u=>{
															u= u.toUpperCase();
															return u[0];
													}).join('')

													return (
															<div className="notes-list"  key={d.id}>
																	<a href="" className="pull-right"><img src="images/overflow-horizontal.svg" /></a>
																	<div className="name">
																			{name}
																	</div>
																	<span>{dateC.format('MMMM Do YYYY, h:mm:ss a')}</span>
																	<b>{d.subject}</b>
																	<p>{describ}</p>
																	<p><a href={d.activity_file} download ><img src="images/file-zip.svg" style={{width: '19px'}}/></a></p>
															</div>
													)
											})}

									</li>
							</ul>
					</div>


		)
	}
}


export default CompanyTabChangeDetailsActivity;
