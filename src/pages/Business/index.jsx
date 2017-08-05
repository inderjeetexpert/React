import React, { PropTypes, Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Row from 'react-flexbox-grid/lib/components/Row';
import Col from 'react-flexbox-grid/lib/components/Col';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './style.scss';

const { string, array, func } = PropTypes;

class Business extends Component {
  // static PropTypes {
  //   searchTerm: func,
  // };
  constructor(props) {
  	super(props);
    this.state = {
    	dataSource: [],
    	locationDataSource: [],
    	text: '',
    	locationText: '',
    }
  }

  // handleLocationData() {

  // }

  // componentDidMount() {
  //   this.getBusinessAutoCompleteSearchTerm();
  // }

  searchTerm(value) {
  	console.log('searchTerm');
  	const search = value;
  	console.log(search);
  	const pendingGetRequests = new Promise((resolve, reject) => {
  	window
      .fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=`+search)
      .then((response) => {
      	return new Promise(async(resolve, reject) => {
        let result;
    	const text = await response.text();
    	try {
	      result = JSON.parse(text);
	      console.log('resultresultresult');
	      console.log(result);
	      this.setState({
	      	dataSource: result,
	      });
	    } catch (error) {
	      if (response.status >= 200 && response.status < 300) {
	        // return resolve(text);
	        console.log('ERROR');
	      }
	    }
	  });
      })
      .then(resolve)
      .catch(reject)
  });
  }

  searchLocation(search) {
  	// console.log('searchLocation2222222222222vsdasdsd');
  	// const search = event.target.value;
  	console.log(search);
  	const pendingGetRequests = new Promise((resolve, reject) => {
  	window
      .fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=`+search+`&key=AIzaSyCHWCuXaojfFc1jxaq6w5_ZICe-S6MBJjg`,{mode: 'no-cors'})
	      .then((response) => {
	      	console.log(response);
	      	// console.log(JSON.parse(response.json(response.text())));
	      	return new Promise(async(resolve, reject) => {
	        let result;
	        // console.log('INSIDEEEEEEEE');
	        console.log(response.text());
	    	const text = await response.text();
	    	// console.log('OUTTTTTTTTTTTTT');
	    	console.log(text);
	    	try {
	    	  console.log('resultresultresult');
		      result = JSON.parse(text);
		      console.log(result);
		      // this.setState({
		      // 	locationDataSource: result.predictions,
		      // });
		    } catch (error) {
		      if (response.status >= 200 && response.status < 300) {
		        // return resolve(text);
		        console.log('ERROR');
		      }
		    }
		  });
	    })
	    .then(resolve)
	    .catch(reject)
    });
  }

   updateSearchTermInput(text) {
    this.setState({ text });
    if(text !== '') {
      this.searchTerm(text);
    }
  };

  updateSearchTermLocInput(locationText) {
    this.setState({ locationText });
    if(locationText !== '') {
      this.searchLocation(locationText);
    }
  };

  onSearchTermSelected(text){
  	console.log('searchTextvvvvvvvvvv');
  	this.setState({ text });
  }

  filterResults(...params){
  	console.log('filterResults');

    return AutoComplete.fuzzyFilter.call(this, ...params);
  };

  locfilterResults(...params){
  	console.log('locfilterResults');

    return AutoComplete.fuzzyFilter.call(this, ...params);
  };

  render() {
  	// const { searchTerm } = this.props;

  	return (
  	  <div className="textMargin">
  	    <span className="field">
  	    <MuiThemeProvider>
  	      <AutoComplete
              searchText={this.state.text}
              onUpdateInput={this.updateSearchTermInput.bind(this)}
              onNewRequest={this.onSearchTermSelected}
              floatingLabelText="Search Term"
              hintText="DF Games"
              filter={this.filterResults}
              dataSource={this.state.dataSource}
              dataSourceConfig={{ text: 'name', value: 'name' }}
              maxSearchResults={5}
            />
          </MuiThemeProvider>
	   </span>
	   <span className="field">
  	    <MuiThemeProvider>
  	      <AutoComplete
              searchText={this.state.locationText}
              onUpdateInput={this.updateSearchTermLocInput.bind(this)}
              // onNewRequest={this.onSearchTermSelected}
              floatingLabelText="Location"
              hintText="Californiya"
              filter={this.locfilterResults}
              dataSource={this.state.locationDataSource}
              dataSourceConfig={{ locationText: 'description', value: 'name' }}
              maxSearchResults={5}
            />
          </MuiThemeProvider>
	   </span>
	   <span className="searcButton">
	   <MuiThemeProvider>
       <RaisedButton label="Search" primary={true} />
      </MuiThemeProvider>
      </span>
      </div>
  	);
  }
}

Business.propTypes = {
  searchTerm: func,
};

export default Business;