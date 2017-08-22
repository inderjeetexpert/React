import React from 'react';
import './subnavigation.css';
const menu = [
	{
		item: 'Dashboard',
		active: true,
		id: 0,
		submenu: [
			{ item: 'Dashboard' }
		]
	},
	{
		item: 'Visitors',
		active: false,
		id: 1,
		submenu: [
			{ item: 'Overview' },
			{ item: 'Visitor Log' },
			{ item: 'Users' },
			{ item: 'Custom Variables' },
			{ item: 'Devices' },
			{ item: 'Software' },
			{ item: 'Locations' },
			{ item: 'Engagement' },
			{ item: 'Times' },
			{ item: 'Real-time Map' }]
	}
]
class SubNavigation extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			menu: menu
		}
		this.handleMenuItem = this.handleMenuItem.bind(this);
	}
	handleMenuItem(index) {
		let { menu } = this.state;
		menu[index].active = !menu[index].active;
		this.setState({
			menu: menu
		})

	}

	render() {

		return (
			<div className="subMenu">
				<ul className="subNavbar">
					{menu.map((item, index) => (

						<li className="menuTab" key={index}>
							<a className="item" onClick={() => this.handleMenuItem(index)}>
								<span className={`menu-icon piwik-icon-reporting-${item.item.toLowerCase()}`}></span>
								{item.item}
							</a>
							<ul className={`${item.active ? 'Active' : ''}`}>
								{item.submenu.map((item, index) => (
									<li className="menuTab" key={index}>
										<a className="item">
											{item.item}
										</a>
									</li>
								))}
							</ul>
						</li>
					))}


				</ul>
			</div>



		)
	}
}


export default SubNavigation;
