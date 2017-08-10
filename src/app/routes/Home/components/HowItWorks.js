import React from 'react';
const HowItWorks = () =>(
	<section className="how-it-works">
		<div className="container">
			<div className="row text-center">
				<div className="col-md-4">
					<div className="media">
						<div className="media-left media-middle">
							<img src="img/your-choose.png"/>
						</div>
						<div className="media-body">
							<h4>Choose</h4>
							<p>You choose from new original recipes.</p>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="media">
						<div className="media-left media-middle">
							<img src="img/we_deliver.png"/>
						</div>
						<div className="media-body">
							<h4>Deliver</h4>
							<p>We deliver exactly what you need in a refrigerated box.</p>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="media">
						<div className="media-left media-middle">
							<img src="img/you_cook.png"/>
						</div>
						<div className="media-body">
							<h4>Create</h4>
							<p>You create exciting new dinners following our simple steps.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default HowItWorks;
