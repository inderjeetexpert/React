import React, { PropTypes, Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Row from 'react-flexbox-grid/lib/components/Row';
import Col from 'react-flexbox-grid/lib/components/Col';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './style.scss';

const { string, array } = PropTypes;

class Business extends Component {
  // static PropTypes {

  // }

  render() {

  	return (
  	  <div className="textMargin">
  	    <span className="field">
  	      <MuiThemeProvider>
	  	    <TextField
		      hintText="DF Games"
		      floatingLabelText="Search Term"
		      className="field"
		    />
		   </MuiThemeProvider>
	   </span>
	   <span className="field">
	     <MuiThemeProvider>
	       <TextField
	         hintText="Californiya"
	         floatingLabelText="Location"
	         className="field"
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

// Business.propTypes = {

// };

export default Business;