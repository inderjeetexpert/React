import React from 'react';
import './widgetcontent.css'
class WidgetContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { children } = this.props;
    return (
      <div className="WidgetContent">
        {children}
      </div>
    )
  }
}


export default WidgetContent;
