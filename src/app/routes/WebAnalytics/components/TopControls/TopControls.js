import React from 'react';
import './topcontrol.css'
class TopControls extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {

		return (
			<div className="top_controls container-fluid">
				<div className="piwikTopControl borderedControl quick-access">
					<span className="piwik-icon-search"></span>
					<input type="text" />
				</div>



			</div>
		)
	}
}


export default TopControls;
