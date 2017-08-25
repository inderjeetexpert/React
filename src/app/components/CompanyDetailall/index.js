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
import CompanyShortDec from './CompanyShortDec';
import CompanyDetailsTab from './CompanyDetailsTab';
import CompanyTabChangeDetails from './CompanyTabChangeDetails';
import AddNotesForm from './AddNotesForm';

export default class CompanyDetailall extends React.Component {

	constructor(props,context) {
    super(props);
		this.state = {
			data: [],

		}
		console.log(props)

	}

	render() {

		return (
			<div>
					<div className="container-fluid">
							<div className="row">
									<CompanyShortDec />
									<div className="col-md-9 col-sm-5">
											<div className="activity-box">
													<CompanyDetailsTab />
													<AddNotesForm/>
											</div>
											<CompanyTabChangeDetails />
									</div>
							</div>
					</div>
			</div>
		);
	}
}
