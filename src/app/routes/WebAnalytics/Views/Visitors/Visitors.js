import React, { Component } from 'react';
import Overview from './Overview/Overview'
import VisitorLog from './VisitorLog/VisitorLog'

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
    return (
      <div className="innerbody">
        <div className="col-md-12">
          {subPageName == 'overview' && <Overview />}
          {subPageName == 'visitorLog' && <VisitorLog />}
        </div>

      </div>
    )
  }
}


export default Visitors;
