import React, { Component } from 'react';
import VisitOverTime from '../../../components/VisitOverTime/VisitOverTime'
import VisitsOverview from '../../../components/VisitsOverview/VisitsOverview'

class Locations extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="innerbody">


				<VisitOverTime />
				<VisitsOverview />

			</div>
		)
	}
}


export default Locations;
