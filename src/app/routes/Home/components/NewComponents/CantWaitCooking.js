import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
const CantWaitCooking = () =>(
	<section className="cant-wait-cooking">
		<div className="container">
			<div className="row">
				<div className="col-md-9">
					<h2>We can’t wait to have you cooking with us.</h2>
					<p>The Halal Plates Promise:
					We take our food seriously and strive to provide you with only the best quality. We promise that our ingredients are the best of the best. With Halal Plates you never have to worry about eating improperly because all of our meals contain:</p>

					<p>100% authentic hand-slaughtered Halal meat with Halal purity maintained from harvest to delivery
						Organic produce
						Ethically raised beef, chicken, goat, and lamb
					No steroids, antibiotics, added hormones or preservatives</p>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-4">
						<img src="img/chef-cartoon.png" />
					</div>
					<div className="col-md-8 col-sm-8">
						<div className="cooking-with-us-holder">
							<h3>What are you waiting for? Join now to get discounts and free meals on us!</h3>
							<h5>Don’t let your friends miss out on the fun!Spread the word!</h5>
							<LinkContainer to="/signup" className="btn btn-orange">
								<button className="btn btn-orange">Sing up now!</button>
							</LinkContainer>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default CantWaitCooking;
