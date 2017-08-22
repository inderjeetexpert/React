import React from 'react';
import './widgettop.css'
class WidgetTop extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { WidgetName } = this.props;
    return (
      <div className="widgetTop">
        <div className="buttons">
          <div className="button">
            <span className="piwik-icon-close" title="Close"></span>
          </div>
          <div className="button">
            <span className="piwik-icon-fullscreen" title="Maximise"></span>
          </div>
          <div className="button">
            <span className="piwik-icon-minimise" title="Minimise"></span>
          </div>
          <div className="button">
            <span className="piwik-icon-reload" title="Refresh"></span>
          </div>
        </div>
        <h3 className="widgetName">
          <span>{WidgetName}</span>
        </h3>
      </div>
    )
  }
}


export default WidgetTop;
