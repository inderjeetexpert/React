import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
const GetCooking = () =>(
	<section className="get-cooking">
		<div className="container">
			<ul>
				<li>
					<img src="img/cooking1.png" />
					<h2>It shouldn’t have <br/>to be difficult</h2>
					<div className="cooking-text">
						<p>Eating Halal shouldn’t have to be difficult. Traveling to multiple stores and trying to
							get halal meat, fresh organic produce, and searching for hard-to-find ingredients is
						now a thing of the past.</p>

						<p>Halal Plates delivers high quality meat, produce and spices toyour door so you can easily prepare the food you love.</p>
					</div>
					<LinkContainer to="/signup" className="btn btn-orange">
						<button className="btn btn-orange">Get Cooking</button>
					</LinkContainer>
				</li>
				<li>
					<img src="img/cooking2.png" />
					<h2>Halal for the way <br/>you live</h2>
					<div className="cooking-text">
						<p>Eating Halal is more than just about proper sustenance, it’s a way of life. </p>
						<p>Nourish your beliefs with a meal service that provides you with the quality you deserve. Eating naturally is the cornerstone of living a happy, healthy life.</p>
					</div>
					<LinkContainer to="/signup" className="btn btn-orange">
						<button className="btn btn-orange">Get Cooking</button>
					</LinkContainer>
				</li>
				<li>
					<img src="img/cooking3.png" />
					<h2>Inspired <br/>creativity</h2>
					<div className="cooking-text">
						<p>Sick of the same old meals week after week? Let us help you switch it up with some exciting new foods that will spark your creativity and keep your taste buds from getting tired.
						</p>
						<p>We’ve come up with some incredible recipes that are sure to get you out of the cycle of dull dinners forever.</p>
					</div>
					<LinkContainer to="/signup" className="btn btn-orange">
						<button className="btn btn-orange">Get Cooking</button>
					</LinkContainer>
				</li>
			</ul>
		</div>
	</section>
);

export default GetCooking;
