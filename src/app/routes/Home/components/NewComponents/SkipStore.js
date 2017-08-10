import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
const SkipStore = () =>(
	<section className="skip_store">
		<div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-7">
                    <h1>Skip the Store</h1>
                    <p>Never waste time at the grocery store or worry about what to make for dinner again.</p>
                    <p>We provide constantly changing meal choices that will always be a hit with your family. Our instructions are simple and you’ll love learning new cooking techniques and food pairings.</p>
                </div>
                <div className="col-md-4 col-sm-5">
                    <img src="img/chef.png" />
                </div>
            </div>
        </div>
	</section>
);

export default SkipStore;