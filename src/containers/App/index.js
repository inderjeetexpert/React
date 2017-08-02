import React, { PropTypes } from 'react';
import Toolbar from 'components/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from 'pages/Home/List';
import './style.scss';

const App = (props) => (
  <main className="viewport">
    <Toolbar />
    {props.children}
    <MuiThemeProvider>
      <MyAwesomeReactComponent />
  	</MuiThemeProvider>
  </main>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
