import React, { Component } from 'react';
import Topnav from 'Components/Topnav';
import CompanyShortDec from 'Components/CompanyDetailall/CompanyShortDec'
import CompanyDetailsTab from 'Components/CompanyDetailall/CompanyDetailsTab'
import AddNotesFormSchedule from 'Components/CompanyDetailall/AddNotesFormSchedule'
import CompanyTabChangeDetailsSchedule from 'Components/CompanyDetailall/CompanyTabChangeDetailsSchedule'

class CompanyDetail extends Component {
	constructor(props, context) {
		super(props, context);
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
																	<AddNotesFormSchedule/>
															</div>
															<div>
																	<CompanyTabChangeDetailsSchedule/>
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
