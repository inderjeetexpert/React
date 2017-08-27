import React from 'react';
import CompanyList from 'Components/CompanyList'
import moment from 'moment'

class CompanyListDet extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let title = moment().startOf('week').format("MMMM DD") + " - " + moment().endOf('week').format("MMMM DD");

		return (
			<div className="innerbody">
					<div className="container-fluid">
							<div className="tab-body">
									{/*<h1>{title} <a>></a></h1>*/}

									<CompanyList cssClass="tab-background wekly-bg on-the-menu" />
					</div>
				</div>
			</div>
		)
	}
}


export default CompanyListDet;
