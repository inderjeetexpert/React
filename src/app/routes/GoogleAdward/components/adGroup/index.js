import React, {Component} from 'react';
import Topnav from '../../../../components/Topnav';
import CreateAdGroup from './createAdGroup';
class AdGroup extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
					<Topnav />
					<div>
						<CreateAdGroup />
					</div>
			</div>
		);
	}
}

export default AdGroup;
