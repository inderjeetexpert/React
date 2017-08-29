import React, { Component } from 'react';
import Overview from './Overview/Overview'
import VisitorLog from '../../components/VisitorLog/VisitorLog'
import Users from '../../components/Users/Users'
import CustomVariables from '../../components/CustomVariables/CustomVariables'
import Devices from './Devices/Devices'
import Software from './Software/Software'
import Locations from './Locations/Locations'
import Engagement from './Engagement/Engagement'

class Visitors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subPageName: props.subPageName
    }
  }
  componentDidUpdate(prevProps, prevState) {
    let { subPageName } = this.props;
    if (prevProps.subPageName != subPageName) {
      this.setState({ subPageName, subPageName })
    }

  }
  render() {
    let { subPageName } = this.state;
    console.log('subpage name', subPageName)
    return (
      <div className="innerbody">
        <div className="col-md-12">
          {subPageName == 'overview' && <Overview />}
          {subPageName == 'visitorLog' && <VisitorLog />}
          {subPageName == 'users' && <Users />}
          {subPageName == 'customVariables' && <CustomVariables />}
          {subPageName == 'devices' && <Devices />}
          {subPageName == 'software' && <Software />}
          {subPageName == 'locations' && <Locations />}
          {subPageName == 'engagement' && <Engagement />}
        </div>

      </div>
    )
  }
}


export default Visitors;
