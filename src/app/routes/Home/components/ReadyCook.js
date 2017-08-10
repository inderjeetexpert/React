import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
const ReadyCook = () =>(
	<section className="readycook">
		<div className="container">
			<div className="ready-text">
				<h2>Make delicious halal dishes</h2>
				<p>Simply cook, serve and enjoy your culinary creations!</p>
				<LinkContainer to="/signup" className="btn btn-lg btn-blank">
					<a href="javascript:void()" >Get Cooking</a>
				</LinkContainer>
			</div>
		</div>
	</section>
);

export default ReadyCook;
