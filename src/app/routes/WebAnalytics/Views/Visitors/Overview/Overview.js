import React, { Component } from 'react';
import VisitOverTime from '../../../components/VisitOverTime/VisitOverTime'
import VisitsOverview from '../../../components/VisitsOverview/VisitsOverview'

class Overview extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="innerbody">

				<div className="col-md-12">

					<VisitOverTime />
					<VisitsOverview />
				</div>

			</div>
		)
	}
}


export default Overview;
