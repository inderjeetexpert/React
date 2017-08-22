import React from 'react';
import RealTimeVisitorCount from '../RealTimeVisitorCount/RealTimeVisitorCount'
import VisitorsInRealTime from '../VisitorsInRealTime/VisitorsInRealTime'
import VisitOverTime from '../VisitOverTime/VisitOverTime'
import VisitsOverview from '../VisitsOverview/VisitsOverview'
import ReferrerTypes from '../ReferrerTypes/ReferrerTypes'
import VisitorMap from '../VisitorMap/VisitorMap'

class Dashboard extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {

		return (
			<div className="innerbody">
				<div className="col-md-4 col-sm-12 ui-sortable">
					<RealTimeVisitorCount />
					<VisitorsInRealTime />
				</div>
				<div className="col-md-4 col-sm-12 ui-sortable">

					<VisitOverTime />
					<VisitsOverview />
				</div>
				<div className="col-md-4 col-sm-12 ui-sortable">
					<VisitorMap />
					<ReferrerTypes />
				</div>
			</div>
		)
	}
}


export default Dashboard;
