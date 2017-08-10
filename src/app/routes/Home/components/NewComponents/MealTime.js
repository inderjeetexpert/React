import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
const MealTime = () =>(
	<section className="meal-time">
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-md-offset-6 col-sm-12">
					<h1>Shake up meal time</h1>
					<p>Eat purposefully with the convenience that only a meal delivery service can offer.</p>
					<p>Perfectly portioned meals crafted with culinary flair and easy to use instructions willbring variety and spice to your weekly meal prep.</p>
					<LinkContainer  className="btn btn-view-menu" to="/menu">
						<button className="btn btn-view-menu">View the menu</button>
					</LinkContainer>
				</div>
			</div>
		</div>
	</section>
);

export default MealTime;
