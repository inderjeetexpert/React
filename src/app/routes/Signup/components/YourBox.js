import React from 'react'
import AutoAffix from 'react-overlays/lib/AutoAffix'

class YourBox extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<AutoAffix viewportOffsetTop={35} container={this.props.AffixContainer}>
				<div className="relative">
					<div className="order-calculate-box">
						<h3>Your Box</h3>
						<p>Delivers on</p>
						<div className="date">Mon June 26th</div>
						<p>Number of recipes</p>
						<ul className="choose_recipes_button">
							<li>1</li>
							<li className="active">2</li>
							<li>3</li>
						</ul>
						<ul className="choose_recipes">
							<li>Choose a recipes</li>
							<li>Choose a recipes</li>
							<li>Choose a recipes</li>
						</ul>
						<h2>$65.70</h2>
					</div>
				</div>
			</AutoAffix>
		)
	}
}

export default YourBox
