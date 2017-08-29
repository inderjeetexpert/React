import React from 'react';
import './companydetail.css';
import axios from 'axios';


class CompanyTabChangeDetailsEmail extends React.Component {
	constructor(props) {
		super(props)

		this.state={
		 data : [],
		 results:'',
		 open: false
		}
		axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/json';
		axios.get('http://www.carderockllc.com/api/v1/send_email/').then(res=>{
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
									<img src="images/send-mail.svg" />
							</li>
							<li>

									<h5>My Emails <a href="" className="pull-right"><img src="images/filter.svg" /></a></h5>

									<h6>AUG 2017</h6>
									{this.state.data.map((d,key) => {
											 let fromemail = "N/A"

											if (d.from_email && d.from_email != '') {
													fromemail = d.from_email
											}

											 let toemail = "N/A"
											if (d.to_emails[0] && d.to_emails[0] != '') {
													toemail = d.to_emails
											}

											let createdate = "N/A"

											if (d.created_at && d.created_at != '') {
													createdate = d.created_at
											}
											let body = "N/A"

											if (d.plain_body && d.plain_body != '') {
													body = d.plain_body
											}



											return (
													<div className="notes-list" key={d.id}>

															<a href ='' className="pull-right"  ><img src="images/overflow-horizontal.svg" /></a>
															<div className="name">
																	SR
															</div>
															<span>{createdate}</span>
															<b>Untitled</b>
															<p>{body}</p>
															<a className="zip">
																	<img src="images/file-zip.svg" /> <span>file.zip</span>
															</a>
															<div className="to-form">
																	<p><strong>To</strong>   {toemail}</p>
																	<p><strong>Form</strong> {fromemail}</p>
															</div>
													</div>
											)
									})}
											</li>
				</ul>
			</div>


		)
	}
}


export default CompanyTabChangeDetailsEmail;
