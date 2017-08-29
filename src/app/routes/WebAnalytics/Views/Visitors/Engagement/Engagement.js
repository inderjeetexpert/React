import React, { Component } from 'react';
import VisitOverTime from '../../../components/VisitOverTime/VisitOverTime'
import FrequencyOverview from '../../../components/FrequencyOverview/FrequencyOverview'
import TableWithTwoCol from '../../../components/TableWithTwoCol/TableWithTwoCol';
import TableWithThreeCol from '../../../components/TableWithThreeCol/TableWithThreeCol';
import TagCloud from '../../../components/TagCloud/TagCloud';

class Engagement extends Component {
	constructor(props) {
		super(props)
		this.state = {
			visitNumberData: {
				widegetName: 'Visits by Visit Number',
				data: [],
				dataFeild1: 'visitNumber',
				dataFeild2: 'visits',
				dataFeild2: 'percentage_visists',
				header1: 'Visit Number',
				header2: 'Visits',
				header3: '% Visits'
			},
			lastVisitData: {
				widegetName: 'Visits by Days Since Last Visit',
				data: [],
				dataFeild1: 'data',
				dataFeild2: 'visits',
				header1: 'Data since last visit',
				header2: 'visits'
			}
		}
	}
	render() {
		let { visitNumberData, lastVisitData } = this.state;
		return (
			<div className="innerbody">


				<VisitOverTime widgetName="Returning Visits Over Time" />
				<FrequencyOverview />
				<div className="row">
					<div className="col-md-6">
						<TagCloud widgetName="Visits per visit duration" />
						<TableWithThreeCol table={visitNumberData} />

					</div>
					<div className="col-md-6">
						<TagCloud widgetName="Visits per number of pages" />

						<TableWithTwoCol table={lastVisitData} />
					</div>
				</div>
			</div>
		)
	}
}


export default Engagement;
