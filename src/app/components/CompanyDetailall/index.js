import React from 'react'
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import './companydetail.css';



export default class CompanyDetailall extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],


		}

	}





	render() {





		return (
			<div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-3 col-sm-5">
							<ul className="body-border info-list">
								<li className="item-info item-image">
									<div><img src="https://s3-media2.fl.yelpcdn.com/bphoto/1scweyIMuDkfrVEKUwbeGQ/o.jpg" className="item-thumbnail" alt="thumbnail image" /></div>
								</li>
								<li className="item-info item-header"><h4>Sunglass Hut</h4></li>
								<li className="item-info item-address"><i className="ion-ios-location-outline"></i>3656 Hilltop Street Springfield, MA 01109</li>
								<li className="item-info item-phone"><i className="ion-ios-telephone-outline"></i>413 693 7429</li>
								<li className="item-info item-email"><i className="ion-ios-email-outline"></i>email@example.com</li>
								<li className="item-other item-revenue"><span>Lorem Ipsum</span> 9000</li>
								<li className="item-other item-revenue"><span>Lorem Ipsum</span> 9000</li>
								<li className="item-other item-revenue"><span>Lorem Ipsum</span> 9000</li>
								<li className="item-other item-revenue"><span>Lorem Ipsum</span> 9000</li>
								<li className="item-other item-revenue"><span>Lorem Ipsum</span> 9000</li>
								<li className="item-other item-revenue"><span>Lorem Ipsum</span> 9000</li>
								<li className="item-other item-revenue"><span>Lorem Ipsum</span> 9000</li>
							</ul>
						</div>
						<div className="col-md-9 col-sm-5">
							<div className="activity-box">
								<ul className="activity-box-head">
									<li><a><img src="images/note.svg" />Notes</a></li>
									<li><a><img src="images/send-mail.svg" />Email</a></li>
									<li><a><img src="images/stop-watch.svg" />Activity Log</a></li>
									<li><a><img src="images/task.svg" />Task List</a></li>
									<li><a><img src="images/calendar.svg" />Schedule</a></li>
									<li><a><img src="images/attachment.svg" />Attachment</a></li>
								</ul>
								<div className="activity-box-body">
									<textarea placeholder="Start typing to leave a note"></textarea>
								</div>
								<div className="activity-box-footer">
									<div className="pull-left">
										<a><img src="images/attachment.svg" /></a>
										<a><img src="images/link-1.svg" /></a>
									</div>
									<div className="pull-right">
										<button className="btn btn-primary">Save Note</button>
										<button className="btn btn-secondary">Discard</button>
									</div>
								</div>
							</div>
							<div className="note-box">
								<ul>
									<li>
										<img src="images/edit.svg" />
									</li>
									<li>
										<h5>My Notes <a href="" className="pull-right"><img src="images/filter.svg" /></a></h5>
										<h6>AUG 2017</h6>
										<div className="notes-list">
											<a href="" className="pull-right"><img src="images/overflow-horizontal.svg" /></a>
											<div className="name">
												SR
											</div>
											<span>Aug 07 2017, 2:15pm</span>
											<b>Untitled</b>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ... aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
										</div>
										<div className="notes-list">
											<div className="name">
												AA
											</div>
											<span>Aug 07 2017, 2:15pm</span>
											<b>Untitled</b>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ... aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
