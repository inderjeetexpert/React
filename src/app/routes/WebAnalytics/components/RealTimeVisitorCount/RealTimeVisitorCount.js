import React from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget'

import './realtimevisitorcount.css'
class RealTimeVisitorCount extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="last-visit-count">
        <Widget>
          <WidgetTop WidgetName="Real Time Visitor Count" />
          <WidgetContent>
            <div className="simple-realtime-visitor-counter" title="0 visitors">
              <div>0</div>
            </div>
            <div className="simple-realtime-elaboration">

              <span className="simple-realtime-metric" data-metric="visits"> 0 visits </span>
              and
              <span className="simple-realtime-metric" data-metric="actions"> 0 actions </span>
              in the last
              <span className="simple-realtime-metric" data-metric="minutes"> 3 minutes </span>

            </div>
          </WidgetContent>
        </Widget>

      </div >
    )
  }
}


export default RealTimeVisitorCount;
