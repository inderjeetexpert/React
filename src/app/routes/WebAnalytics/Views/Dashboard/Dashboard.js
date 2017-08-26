import React from 'react';
import RealTimeVisitorCount from '../../components/RealTimeVisitorCount/RealTimeVisitorCount'
import VisitorsInRealTime from '../../components/VisitorsInRealTime/VisitorsInRealTime'
import VisitOverTime from '../../components/VisitOverTime/VisitOverTime'
import VisitsOverview from '../../components/VisitsOverview/VisitsOverview'
import ReferrerTypes from '../../components/ReferrerTypes/ReferrerTypes'
import VisitorMap from '../../components/VisitorMap/VisitorMap'

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
