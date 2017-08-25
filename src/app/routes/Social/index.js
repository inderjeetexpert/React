import React, { Component } from 'react';
import Topnav from '../../components/Topnav';
import SocialAdMarketing from './components/SocialAdMarketing';

class Social extends Component {
  constructor(props, context) {
		super(props, context);
	}

  render(){
    return(
      <div>
					<Topnav />
					<div>
							<SocialAdMarketing/>
					</div>
			</div>
    )
  }
}

export default Social;
