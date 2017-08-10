import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
const HomeHeader = () =>(
	<section className="home-header">
		<div className="container">
			<div className="login-signup">
				<div className="pull-right">
					<button className="btn btn-orange">Login</button>
					<button className="btn btn-orange btn-black">Register</button>
				</div>
			</div>
			<div className="welcome-box">
				<img src="img/logo2-dark.png" className="home-logo"/>
				<ul className="nav">
					<li>
						<LinkContainer to="/menu">
							<a href="#">On The Menu</a>
						</LinkContainer>
					</li>
					<li>
						<LinkContainer to="/learn">
							<a href="#">Learn More</a>
						</LinkContainer>
					</li>
					<li>
						<LinkContainer to="/price">
							<a href="#">Plans & Pricing</a>
						</LinkContainer>
					</li>
					<li>
						<LinkContainer to="/gift">
							<a href="#">Gifts</a>
						</LinkContainer>
						</li>
				</ul>
				<img src="img/halal-taglines.png" className="home-taglines"/>
				<h1>YOU’RE WELCOME!</h1>
				<p>Fresh Organic Produce, Grass-Fed Beef, Farm-Raised Chicken, 100% Halal Certified Delivered weekly to your door with delicious chef inspired recipes </p>
			</div>
		</div>
	</section>
);

export default HomeHeader;
