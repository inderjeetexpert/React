import React from 'react';
import { NavLink } from 'react-router-dom'
import './subnavigation.css';
const menu = [
	{
		item: 'Dashboard',
		active: false,
		id: 0,
		submenu: [
			{
				item: 'Dashboard',
				link: 'dashboard'
			}
		]
	},
	{
		item: 'Visitors',
		active: false,
		id: 1,
		submenu: [
			{
				item: 'Overview',
				link: 'overview'
			},
			{
				item: 'Visitor Log',
				link: 'visitorLog'
			},
			{
				item: 'Users',
				link: 'users'
			},
			{
				item: 'Custom Variables',
				link: 'customVariables'
			},
			{
				item: 'Devices',
				link: 'devices'
			},
			{
				item: 'Software',
				link: 'software'
			},
			{
				item: 'Locations',
				link: 'locations'
			},
			{
				item: 'Engagement',
				link: 'engagement'
			},
			{
				item: 'Times',
				link: 'times'
			},
			{
				item: 'Real-time Map',
				link: 'realTimeMap'
			}]
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
		let { pageName } = this.props;
		return (
			<div className="subMenu">
				<ul className="subNavbar">
					{menu.map((item, index) => (

						<li className="menuTab" key={index}>
							<a className="item" onClick={() => this.handleMenuItem(index)}>
								<span className={`menu-icon piwik-icon-reporting-${item.item.toLowerCase()}`}></span>
								{item.item}
							</a>
							<ul className={`${item.active || pageName == item.item ? 'Active' : ''}`}>
								{item.submenu.map((subItem, index) => (
									<li className="menuTab" key={index}>
										<NavLink to={`/webAnalytics/${item.item}/${subItem.link}`} activeClassName="active" className="item">{subItem.item}</NavLink >

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
