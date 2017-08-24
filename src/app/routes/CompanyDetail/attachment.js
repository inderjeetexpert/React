import React, { Component } from 'react';
import Topnav from 'Components/Topnav';
import CompanyShortDec from 'Components/CompanyDetailall/CompanyShortDec'
import CompanyDetailsTab from 'Components/CompanyDetailall/CompanyDetailsTab'
import AddNotesFormAttach from 'Components/CompanyDetailall/AddNotesFormAttach'
import CompanyTabChangeDetailsAttach from 'Components/CompanyDetailall/CompanyTabChangeDetailsAttach'

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
																	<AddNotesFormAttach/>
															</div>
															<div>
																	<CompanyTabChangeDetailsAttach/>
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
