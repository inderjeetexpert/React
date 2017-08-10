import React, {Component} from 'react';

import Topnav from '../../components/Topnav';
import TabsOnTheMenu from './components/TabsOnTheMenu';


class Main extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
				<Topnav/>
				<TabsOnTheMenu/>
			</div>
		);
	}
}

export default Main;
