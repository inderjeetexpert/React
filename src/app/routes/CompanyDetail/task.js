import React, { Component } from 'react';
import Topnav from 'Components/Topnav';
import CompanyShortDec from 'Components/CompanyDetailall/CompanyShortDec'
import CompanyDetailsTab from 'Components/CompanyDetailall/CompanyDetailsTab'
import AddNotesFormTask from 'Components/CompanyDetailall/AddNotesFormTask'
import CompanyTabChangeDetailsTask from 'Components/CompanyDetailall/CompanyTabChangeDetailsTask'

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
																	<AddNotesFormTask/>
															</div>
															<div>
																	<CompanyTabChangeDetailsTask/>
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
