import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
const HowItWorks = () =>(
	<section className="how_works">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h1>how it workse</h1>
				</div>
				<div className="col-md-12">
					<ul className="how_works-parant">
						<li>
							<div className="hiw-image">
								<img src="img/choose-recipes.png" />
								<span>1</span>
							</div>
							<b>You choose from new original recipes.</b>
							<p>To make food more sustainable and recipes more delicious.</p>
						</li>
						<li>
							<div className="hiw-image">
								<img src="img/deliverd.png" />
								<span>2</span>
							</div>
							<b>We deliver exactly what you need in a refrigerated box.</b>
							<p>By cutting out the middle man and delivering ingredients at their freshest.</p>
						</li>
						<li>
							<div className="hiw-image">
								<img src="img/new-dinner.png" />
								<span>3</span>
							</div>
							<b>You create exciting new dinners following our simple steps.</b>
							<p>With perfectly portioned ingredients and step-by-step recipes.</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
);

export default HowItWorks;
