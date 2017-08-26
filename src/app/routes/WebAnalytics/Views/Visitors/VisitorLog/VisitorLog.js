import React, { Component } from 'react';
import VisitorLogComponent from '../../../components/VisitorLog/VisitorLog'

class VisitorLog extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="innerbody">

				<div className="col-md-12">
					<VisitorLogComponent />

				</div>

			</div>
		)
	}
}


export default VisitorLog;
