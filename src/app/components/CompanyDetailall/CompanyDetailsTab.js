import React from 'react';
import './companydetail.css';
import { LinkContainer } from 'react-router-bootstrap';

class CompanyDetailsTab extends React.Component {
	constructor(props) {
  super(props)
  console.log(window.location.hash)
  let url = window.location.hash.split('/')
  const id=url[url.length-1]
  this.state={
   id
  }
 }

	render() {


		return (
			<div>
					<ul className="activity-box-head">
							<li className="active">
									<LinkContainer to={"/companyDetail/notes"+this.state.id}>
											<a><img src="images/note.svg" />Notes</a>
									</LinkContainer>
							</li>
							<li>
									<LinkContainer to={"/companyDetail/email/"+this.state.id}>
											<a href="javascript:void(0)"><img src="images/send-mail.svg" />Email</a>
									</LinkContainer>

							</li>
							<li>
									<LinkContainer to="/companyDetail/activity">
											<a><img src="images/stop-watch.svg" />Activity Log</a>
									</LinkContainer>
							</li>
							<li>
									<LinkContainer to="/companyDetail/task">
											<a><img src="images/task.svg" />Task List</a>
									</LinkContainer>
							</li>
							<li>
									<LinkContainer to="/companyDetail/schedule">
											<a><img src="images/calendar.svg" />Schedule</a>
									</LinkContainer>
							</li>
							<li>
									<LinkContainer to="/companyDetail/attachment">
											<a><img src="images/attachment.svg" />Attachment</a>
									</LinkContainer>
							</li>
					</ul>
			</div>

		)
	}
}


export default CompanyDetailsTab;
