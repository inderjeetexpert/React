import React from 'react';
import './companydetail.css';
import axios from 'axios';
import moment from 'moment';
class CompanyTabChangeDetailsActivity extends React.Component {
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
		axios.get('http://www.carderockllc.com/api/v1/company/activities/?company_id='+company_id).then(res=>{
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
											<img src="images/stop-watch.svg" />
									</li>
									<li>
											<h5>My Activity <a href="" className="pull-right"><img src="images/filter.svg" /></a></h5>
											<h6>AUG 2017</h6>
											{this.state.data.map((d,key) => {
													let describ = "N/A"

													if (d.description && d.description != '') {
															describ = d.description
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
																	<b>Untitled</b>
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
