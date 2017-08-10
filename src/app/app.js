import React from 'react';
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import uuidv5 from 'uuid/v5'

import MainRoute from './routes'
import Config from './config'


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//if sessionId is not set set it now
if(!localStorage.getItem('sessionId')){
	localStorage.setItem('sessionId',uuidv5(Config.api,uuidv5.URL));
	localStorage.setItem('loggedIn',false);
	localStorage.setItem('name','Guest');
}


// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
	<MainRoute/>
	, document.getElementById('app')
)
