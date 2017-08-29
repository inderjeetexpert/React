import React, { Component } from 'react';
import VisitorMap from '../../../components/VisitorMap/VisitorMap';
import TableWithTwoCol from '../../../components/TableWithTwoCol/TableWithTwoCol';
import './locations.css';
import { SITE_URL } from '../../../../../api/urls';

class Locations extends Component {
	constructor(props) {
		super(props)
		this.state = {
			continentData: {
				widegetName: 'Continent',
				data: [],
				dataFeild1: 'continent',
				dataFeild2: 'unique_visitors',
				header1: 'Continent',
				header2: 'Unique Visitors'
			},
			browserLanguageData: {
				widegetName: 'Browser Language',
				data: [],
				dataFeild1: 'language',
				dataFeild2: 'visits',
				header1: 'Language',
				header2: 'Visits'
			},
			countryData: {
				widegetName: 'Country',
				data: [],
				dataFeild1: 'country',
				dataFeild2: 'unique_visitors',
				header1: 'Country',
				header2: 'Unique Visitors'
			},
			regionData: {
				widegetName: 'Region',
				data: [],
				dataFeild1: 'region',
				dataFeild2: 'unique_visitors',
				header1: 'Region',
				header2: 'Unique Visitors'
			},
			cityData: {
				widegetName: 'City',
				data: [],
				dataFeild1: 'city',
				dataFeild2: 'unique_visitors',
				header1: 'City',
				header2: 'Unique Visitors'
			},
		}
	}


	dataFormat(cell) {
		return `<img src="images/piwik/plugins/Morpheus/icons/dist/os/WIN.png" /> ${cell}`;
	}


	render() {
		let { continentData, browserLanguageData, countryData, regionData, cityData } = this.state;
		let { dataFormat } = this;
		return (
			<div className="innerbody">
				<div className="col-md-6">
					<VisitorMap />
					<TableWithTwoCol table={continentData} />
					<div className="card-content widget">
						<div>
							<div className="sparkline ng-scope">
								<img alt="image" width="100" height="25" src={`${SITE_URL}?module=UserCountry&action=getLastDistinctCountriesGraph&idSite=1&period=day&date=2017-07-30,2017-08-28&showtitle=1&random=2364&viewDataTable=sparkline`} />
								<strong>2</strong> distinct countries
    						</div>
							<br />
						</div>
					</div>
					<TableWithTwoCol table={browserLanguageData} />
				</div>
				<div className="col-md-6">
					<TableWithTwoCol table={countryData} dataFormat={dataFormat} />
					<TableWithTwoCol table={regionData} dataFormat={dataFormat} />
					<TableWithTwoCol table={cityData} dataFormat={dataFormat} />
				</div>



			</div>
		)
	}
}


export default Locations;
