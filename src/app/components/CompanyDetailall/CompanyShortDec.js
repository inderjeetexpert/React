import React from 'react';
import './companydetail.css';


class CompanyShortDec extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {


		return (
			<div>


					<div className="col-md-3 col-sm-5">
							<ul className="body-border info-list">
									<li className="item-info item-image">
											<div><img src="https://s3-media2.fl.yelpcdn.com/bphoto/1scweyIMuDkfrVEKUwbeGQ/o.jpg" className="item-thumbnail" alt="thumbnail image" /></div>
									</li>
									<li className="item-info item-header"><h4>Sunglass Hut</h4></li>
									<li className="item-info item-address"><i className="ion-ios-location-outline"></i>3656 Hilltop Street Springfield, MA 01109</li>
									<li className="item-info item-phone"><i className="ion-ios-telephone-outline"></i>413 693 7429</li>
									<li className="item-info item-email"><i className="ion-ios-email-outline"></i>email@example.com</li>
									<li className="item-other item-revenue"><span>Lorem Ipsum</span> 9000</li>
									<li className="item-other item-revenue"><span>Lorem Ipsum</span> 9000</li>
									<li className="item-other item-revenue"><span>Lorem Ipsum</span> 9000</li>
									<li className="item-other item-revenue"><span>Lorem Ipsum</span> 9000</li>
									<li className="item-other item-revenue"><span>Lorem Ipsum</span> 9000</li>
									<li className="item-other item-revenue"><span>Lorem Ipsum</span> 9000</li>
									<li className="item-other item-revenue"><span>Lorem Ipsum</span> 9000</li>
							</ul>
					</div>

			</div>
		)
	}
}


export default CompanyShortDec;
