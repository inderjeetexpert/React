import React from 'react';
import './widget.css'
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { children } = this.props;
    return (
      <div className="widget">
        {this.props.children}
      </div>
    )
  }
}


export default Dashboard;
