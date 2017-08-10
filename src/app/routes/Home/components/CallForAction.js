import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
class CallForAction extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}

	render(){



		return(
			<header>
				<div className="intro-text">
					<h1>Prepare Delightful Dishes</h1>
					<p>Now with the authentic spices and ingredients delivered straight to your home, prepare some of the sumptuous dishes</p>
					<LinkContainer to="/signup" className="btn btn-lg btn-blank">
						<a href="javascript:void()" >Get Cooking</a>
					</LinkContainer>
				</div>
		  </header>
		)
	}
}

export default CallForAction;
