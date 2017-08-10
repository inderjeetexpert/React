import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
const AboutHalal = () =>(
	<section className="about-halal">
		<div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-4">
                    <img src="img/logo2-light@2x.png" className="img-responsive"/>
                </div>
                <div className="col-md-8 col-sm-8">
                    <h1>About Halal Plates:</h1>
                    <p>The masterminds at Halal Plates are foodies on a mission.</p>

                    <p>We believe that the Muslim community shouldn't have to miss out on the fun and
                    adventure of new cuisines just because we expect our meals to be religiously
                    compliant.</p>

                    <p>We wanted to ensure Halal meat is being delivered the way it was supposed to be:
                    Ethically raised (Tahir), and naturally processed.</p>

                    <p>Halal Plates was born because its time for us to start eating delicious recipes from
                    world’s cuisine – without sacrificing our entire days meal planning and running
                    around.</p>
                </div>
            </div>
        </div>
	</section>
);

export default AboutHalal;