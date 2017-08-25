import React from 'react';
import axios from 'axios';
import './companydetail.css';


class CompanyShortDec extends React.Component {
	constructor(props) {
  super(props)
  //console.log(window.location.hash)
  let url = window.location.hash.split('/')
  const id=url[url.length-1]
  this.state={
   id,
	 data : '',
	 images: '',
	 phones: '',
	 emails: ''
  }

	axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
	axios.defaults.headers.common['Content-Type'] = 'application/json';
	axios.get('http://www.carderockllc.com/api/v1/company/companies/'+id+'/').then(res=>{
		console.log(res.data);
		this.setState({
			data: res.data,
			images : res.data.images[0],
      phones: res.data.phones[0],
			emails: res.data.emails[0]
		})
	}).catch(err=>{
		console.error(err);
	});

 }

	render() {
		let image = "images/no-image.png"

		if (this.state.images && this.state.images != '') {
				image = this.state.images
		}

		let phone = "N/A"

		if (this.state.phones && this.state.phones != '') {
				phone = this.state.phones
		}

		let address = "N/A"

		if (this.state.data.formatted_address && this.state.data.formatted_address != '') {
				address = this.state.data.formatted_address
		}

		let desc = "N/A"

		if (this.state.data.description && this.state.data.description != '') {
				desc= this.state.data.description
		}

		let social = "N/A"

		if (this.state.data.facebook_url && this.state.data.facebook_url != '') {
				social= this.state.data.facebook_url
		}

		let employee = "0"
		if (this.state.data.estimated_employee_count && this.state.data.estimated_employee_count != '') {
				employee = this.state.data.estimated_employee_count
		}

		let email = "N/A"

		if (this.state.emails && this.state.emails != '') {
				email = this.state.emails
		}


		return (
			<div>


					<div className="col-md-3 col-sm-5">
							<ul className="body-border info-list">
									<li className="item-info item-image">

											<div><img src={image} className="item-thumbnail" alt="thumbnail image" /></div>
									</li>
									<li className="item-info item-header"><h4>{this.state.data.name}</h4></li>
									<li className="item-info item-address"><i className="ion-ios-location-outline"></i>{address}</li>
									<li className="item-info item-phone"><i className="ion-ios-telephone-outline"></i>{phone}</li>
									<li className="item-info item-email"><i className="ion-ios-email-outline"></i>{email}</li>
									<li className="item-other item-revenue"><span>No of employess</span>{employee}</li>
									<li className="item-other item-revenue"><span>Revenue</span> {this.state.data.revenue}</li>
									<li className="item-other item-revenue"><span>Overview</span>{desc}</li>
									<li className="item-other item-revenue"><span>Profiles</span>{social}</li>
									<li className="item-other item-revenue"><span>Founding Date</span> 25th Aug 2017</li>

							</ul>
					</div>

			</div>
		)
	}
}


export default CompanyShortDec;
