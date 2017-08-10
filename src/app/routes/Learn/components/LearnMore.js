import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { LinkContainer } from 'react-router-bootstrap';


const LearnMore = () => (
  <div>
		<div className="learnmore-head">
      <div className="container">
				<div className="learnmore-text">
					<h4>The Halal Plates</h4>
					<h1>Experience</h1>
				</div>
      </div>
		</div>
		<section>
			<div className="container">
				<div className="row text-center">
					<div className="col-md-4 recipes-box">
						<h4 className="service-heading">Weekly Recipes</h4>
						<div className="recipes"><img className="img-responsive" src="img/recipes.jpg"/></div>
						<div className="recipes-text">
							<p>Choose from original recipes created by our culinary team & guest chefs.</p>
							<p>New recipes are introduced each week and feature land, sea and veggie options.</p>
							<p>All dishes are balanced and nutritious.</p>
						</div>
					</div>
					<div className="col-md-4 recipes-box">
						<h4 className="service-heading">Fresh Ingredients</h4>
						<div className="recipes"><img className="img-responsive" src="img/ingredients.jpg"/></div>
						<div className="recipes-text">
							<p>Locally sourced specialty ingredients that are fresher than the supermarket.</p>
							<p>No waste! Ingredients are pre-portioned for each recipe.</p>
						</div>
					</div>
					<div className="col-md-4 recipes-box">
						<h4 className="service-heading">Convenient Delivery</h4>
						<div className="recipes"><img className="img-responsive" src="img/delivery.jpg"/></div>
						<div className="recipes-text">
							<p>Not home? No problem. Ingredients arrive in a refrigerated box so your food stays fresh.</p>
							<p>No signature required to accept delivery.</p>
							<p>Choose the delivery day that works best for you!</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="farm">
      <div className="container">
				<h1>Farm Fresh & Responsibly Sourced Ingredients </h1>
				<p>Our ingredients are of the highest quality and are sourced responsibly. We build direct relationships with Canadian farmers allowing us to set the highest standards for our ingredients as well as develop a more sustainable food system.</p>

				<p>We are focused on building a better food system that supports artisanal suppliers, promotes responsible farming and eliminates wasteful steps in the food supply chain.
				View the Menu </p>
				<LinkContainer className="btn-warning btn-lg" to="/menu">
					<button className="btn-warning btn-lg">View the Menu</button>
				</LinkContainer>
      </div>
		</section>
		<section className="suppliers">
      <div className="container">
				<h5>Meet Our</h5>
				<h2>Suppliers</h2>
				<p>
					Our team works with hundreds of local farms and family-run purveyors across Canada to get the best seasonal ingredients to your home. Get to know some of them below.
				</p>
				<div className="row">
					<div className="col-md-4">
						<div className="supply-box-img">
							<img className="img-responsive" src="img/ingredients.jpg"/>
							<a>
								<h3>E & B Medel</h3>
								<p><span>Sanremo Bakery, a family-owned bakery in Etobicoke, Ontario that’s been operating for more than 40 years.</span></p>
							</a>
						</div>
					</div>
					<div className="col-md-4">
						<div className="supply-box-img">
							<img className="img-responsive" src="img/ingredients.jpg"/>
							<a>
								<h3>E & B Medel</h3>
								<p><span>Sanremo Bakery, a family-owned bakery in Etobicoke, Ontario that’s been operating for more than 40 years.</span></p>
							</a>
						</div>
					</div>
					<div className="col-md-4">
						<div className="supply-box-img">
							<img className="img-responsive" src="img/ingredients.jpg"/>
							<a>
								<h3>E & B Medel</h3>
								<p><span>Sanremo Bakery, a family-owned bakery in Etobicoke, Ontario that’s been operating for more than 40 years.</span></p>
							</a>
						</div>
					</div>
				</div>
      </div>
		</section>
		<section className="our_mission">
      <div className="container">
				<h1>Our Mission</h1>
				<p>We’re on a mission to create meaningful human connections through food.We believe the experience of cooking with farm-fresh ingredients, nutritious recipes and acheiving chef-worthy results should be within every home cook's reach. We are bringing the fun back into the kitchen and helping Canadians connect over a delicious meal!</p>
				<LinkContainer className="btn-warning btn-lg" to="/signup">
					<button className="btn-warning btn-lg">Get Started</button>
				</LinkContainer>
      </div>
		</section>
	</div>
);

export default LearnMore;
