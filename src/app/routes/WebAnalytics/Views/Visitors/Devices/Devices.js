import React, { Component } from 'react';
import TableWithTwoCol from '../../../components/TableWithTwoCol/TableWithTwoCol'

class Devices extends Component {
	constructor(props) {
		super(props)
		this.state = {
			deviceTypeData: {
				widegetName: 'Device type',
				data: [],
				dataFeild1: 'Type',
				dataFeild2: 'unique_visitors',
				header1: 'Type',
				header2: 'Unique Visitors'
			},
			deviceBrandData: {
				widegetName: 'Device Brand',
				data: [],
				dataFeild1: 'Brand',
				dataFeild2: 'unique_visitors',
				header1: 'Brand',
				header2: 'Unique Visitors'
			},
			screenResolutionData: {
				widegetName: 'Screen Resolution',
				data: [],
				dataFeild1: 'Resolution',
				dataFeild2: 'unique_visitors',
				header1: 'Resolution',
				header2: 'Unique Visitors'
			},
			deviceModelData: {
				widegetName: 'Device model',
				data: [],
				dataFeild1: 'Model',
				dataFeild2: 'unique_visitors',
				header1: 'Model',
				header2: 'Unique Visitors'
			},
		}
	}


	dataFormat(cell) {
		return `<img src="images/piwik/plugins/Morpheus/icons/dist/os/WIN.png" /> ${cell}`;
	}
	render() {
		let { dataFormat } = this;
		let { deviceTypeData, deviceBrandData, deviceModelData, screenResolutionData } = this.state;
		return (
			<div className="innerbody">
				<div className="col-md-6">
					<TableWithTwoCol table={deviceTypeData} dataFormat={dataFormat} />
					<TableWithTwoCol table={deviceBrandData} dataFormat={dataFormat} />
				</div>
				<div className="col-md-6">
					<TableWithTwoCol table={deviceModelData} dataFormat={dataFormat} />
					<TableWithTwoCol table={screenResolutionData} dataFormat={dataFormat} />
				</div>
			</div>
		)
	}
}


export default Devices;
