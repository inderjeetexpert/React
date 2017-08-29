import React, { Component } from 'react';
import TableWithTwoCol from '../../../components/TableWithTwoCol/TableWithTwoCol'
import TableWithThreeCol from '../../../components/TableWithThreeCol/TableWithThreeCol'

import BrowserEngines from '../../../components/BrowserEngines/BrowserEngines'

class Software extends Component {
	constructor(props) {
		super(props)
		this.state = {
			operatingSystemVersionsData: {
				widegetName: 'Operating System versions',
				data: [],
				dataFeild1: 'os_version',
				dataFeild2: 'unique_visitors',
				header1: 'Operating system version',
				header2: 'Unique Visitors'
			},
			configurationsData: {
				widegetName: 'Configurations',
				data: [],
				dataFeild1: 'configurations',
				dataFeild2: 'unique_visitors',
				header1: 'Configurations',
				header2: 'Unique Visitors'
			},
			browserPluginsData: {
				widegetName: 'Browser Plugins',
				data: [],
				dataFeild1: 'Plugin',
				dataFeild2: 'visits',
				dataFeild2: 'percentage_visists',
				header1: 'Plugin',
				header2: 'Visits',
				header3: '% Visits'
			},

			browsersData: {
				widegetName: 'Browsers',
				data: [],
				dataFeild1: 'Browser',
				dataFeild2: 'unique_visitors',
				header1: 'Browser',
				header2: 'Unique Visitors'
			}
		}
	}

	dataFormat(cell) {
		return `<img src="images/piwik/plugins/Morpheus/icons/dist/os/WIN.png" /> ${cell}`;
	}
	render() {
		let { operatingSystemVersionsData, browsersData, configurationsData, browserPluginsData } = this.state;
		let { dataFormat } = this;
		return (
			<div className="innerbody">
				<div className="col-md-6">
					<TableWithTwoCol table={operatingSystemVersionsData} dataFormat={dataFormat} />
					<TableWithTwoCol table={configurationsData} />
					<TableWithThreeCol table={browserPluginsData} />
				</div>
				<div className="col-md-6">
					<TableWithTwoCol table={browsersData} />
					<BrowserEngines />
				</div>
			</div>
		)
	}
}


export default Software;
