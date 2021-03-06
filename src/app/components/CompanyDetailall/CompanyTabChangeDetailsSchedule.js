import React from 'react';
import './companydetail.css';


class CompanyTabChangeDetailsSchedule extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {


		return (

			<div className="note-box">
				<ul>
					<li>
						<img src="images/calendar-blank.svg" />
					</li>
					<li>
						<h5>My Schedule <a href="" className="pull-right"><img src="images/filter.svg" /></a></h5>
						<h6>AUG 2017</h6>
						<div className="notes-list">
							<a href="" className="pull-right"><img src="images/overflow-horizontal.svg" /></a>
							<div className="name calender">
								22
													</div>
							<span><img src="images/calendar-blank.svg" /> Aug 07 2017     <img src="images/clock.svg" /> 9:00am To 5:00 pm </span>
							<b>Untitled</b>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ... aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
							<div className="to-form attending">
								<p className="pull-left"><b>Attending</b></p>
								<div className="pull-right">
									<strong style={{ background: '#fb6f49' }}>EL</strong>
									<strong style={{ background: '#4285f4' }}>AA</strong>
									<strong style={{ background: '#41d6c3' }}>SR</strong>
								</div>
							</div>
						</div>
						<div className="notes-list">
							<a href="" className="pull-right"><img src="images/overflow-horizontal.svg" /></a>
							<div className="name calender">
								22
													</div>
							<span><img src="images/calendar-blank.svg" /> Aug 07 2017     <img src="images/clock.svg" /> 9:00am To 5:00 pm </span>
							<b>Untitled</b>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ... aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
							<div className="to-form attending">
								<p className="pull-left"><b>Attending</b></p>
								<div className="pull-right">
									<strong style={{ background: '#fb6f49' }}>EL</strong>
									<strong style={{ background: '#4285f4' }}>AA</strong>
									<strong style={{ background: '#41d6c3' }}>SR</strong>
								</div>
							</div>
						</div>
					</li >
				</ul >
			</div >


		)
	}
}


export default CompanyTabChangeDetailsSchedule;
