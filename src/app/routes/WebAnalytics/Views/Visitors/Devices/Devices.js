import React, { Component } from 'react';
import DeviceType from '../../../components/DeviceType/DeviceType'
import DeviceBrand from '../../../components/DeviceBrand/DeviceBrand'
import DeviceModel from '../../../components/DeviceModel/DeviceModel'
import ScreenResolution from '../../../components/ScreenResolution/ScreenResolution'

class Devices extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="innerbody">
				<div className="col-md-6">
					<DeviceType />
					<DeviceBrand />
				</div>
				<div className="col-md-6">
					<DeviceModel />
					<ScreenResolution />
				</div>
			</div>
		)
	}
}


export default Devices;
