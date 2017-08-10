import React from 'react';
import Style from './style';
const CommingSoon = () =>(
	<section className="container">
		<div className="col-md-6 col-md-offset-3" style={Style.container}>
			<h2 className="section-heading text-center">Feature is coming soon!!</h2>
			<div className="text-center">
				<img className="img-responsive" style={{width:250,margin:'auto'}} src="img/logo2-dark.png"/>
				<h4 className="service-heading" style={{color:'white'}}>We are working on something awesome.</h4>
			</div>
		</div>
	</section>
);

export default CommingSoon;
