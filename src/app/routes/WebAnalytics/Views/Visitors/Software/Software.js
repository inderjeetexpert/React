import React, { Component } from 'react';
import OperatingSystemVersion from '../../../components/OperatingSystemVersion/OperatingSystemVersion'
import BrowserPlugins from '../../../components/BrowserPlugins/BrowserPlugins'
import Configurations from '../../../components/Configurations/Configurations'
import Browsers from '../../../components/Browsers/Browsers'
import BrowserEngines from '../../../components/BrowserEngines/BrowserEngines'

class Software extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="innerbody">
				<div className="col-md-6">
					<OperatingSystemVersion />
					<Configurations />
					<BrowserPlugins />
				</div>
				<div className="col-md-6">
					<Browsers />
					<BrowserEngines />
				</div>
			</div>
		)
	}
}


export default Software;
