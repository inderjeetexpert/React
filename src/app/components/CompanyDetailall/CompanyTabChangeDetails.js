import React from 'react';
import axios from 'axios';
import moment from 'moment';
import './companydetail.css';


class CompanyTabChangeDetails extends React.Component {
	constructor(props) {
		super(props)
		let url = window.location.hash.split('/')
	  const id=url[url.length-1]
	  this.state={
	   id,
		 data: []
	  }
			this.props.fetchnotes(id);

	}



	render() {


		return (

					<div className="note-box">
							<ul>
									<li>
											<img src="images/edit.svg" />
									</li>
									<li>
											<h5>My Notes <a href="" className="pull-right"><img src="images/filter.svg" /></a></h5>
											<h6>AUG 2017</h6>

											{this.props.data.map((m) => {

													let dateC= moment(m.created_at);
													//console.log(m.user);

													let name= m.user.split(' ').map(u=>{
															u= u.toUpperCase();
															return u[0];
													}).join('')

													//console.log(m);
													return(
															<div className="notes-list" key={m.id}>
																	<a href="" className="pull-right"><img src="images/overflow-horizontal.svg" /></a>
																	<div className="name">
																			{name}
																	</div>

																	<span>{dateC.format('MMMM Do YYYY, h:mm:ss a')}</span>
																	<b>Untitled</b>
																	<p>{m.description}</p>
																	<p><a href={m.note_file} download ><img src="images/file-zip.svg" style={{width: '19px'}}/></a></p>
																	</div>
																			)



											})}
									</li>
							</ul>
					</div>


		)
	}
}


export default CompanyTabChangeDetails;
