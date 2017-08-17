import React, { Component } from 'react';
import Topnav from '../../components/Topnav';
import PeopleSearch from './components/PeopleSearch';

class People extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
					<Topnav />
					<div>

							<PeopleSearch />
					</div>
			</div>
		);
	}
}

export default People;
