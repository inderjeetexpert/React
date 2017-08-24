import React from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget'
import { liveGetCounter } from '../../../../api/webAnalytics';

import './realtimevisitorcount.css'
class RealTimeVisitorCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      isLoading: true,
      data: null
    }
  }
  componentDidMount() {
    let info = {
      idSite: 1,
      lastMinutes: 3
    }

    liveGetCounter(info)
      .then((response) => {
        this.setState({
          errorMessage: null,
          isLoading: false,
          data: response[0]
        })
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
          isLoading: false
        })
      });
  }
  render() {
    let { isLoading, errorMessage, data } = this.state;
    return (
      <div className="last-visit-count">
        <Widget>
          <WidgetTop WidgetName="Real Time Visitor Count" />
          <WidgetContent>
            {isLoading ? <div className="loading">please wait</div> :
              errorMessage ? <div className="errorMessage">{errorMessage}</div> :
                <div> <div className="simple-realtime-visitor-counter" title={`${data.visitors} visitors`}>
                  <div>{data.visitors}</div>
                </div>
                  <div className="simple-realtime-elaboration">

                    <span className="simple-realtime-metric" data-metric="visits"> {data.visits} visits </span>
                    and
              <span className="simple-realtime-metric" data-metric="actions"> {data.actions} actions </span>
                    in the last
              <span className="simple-realtime-metric" data-metric="minutes"> 3 minutes </span>

                  </div>
                </div>

            }
          </WidgetContent>
        </Widget>

      </div >
    )
  }
}


export default RealTimeVisitorCount;
