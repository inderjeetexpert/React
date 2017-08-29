import React, { Component } from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import FooterWidget from '../FooterWidget/FooterWidget';
import './tagcloud.css'

class FrequencyOverview extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }
  render() {
    let { widgetName } = this.props;

    return (
      <div className="tag-cloud-view">
        <Widget>
          <WidgetTop WidgetName={widgetName} />
          <WidgetContent>
            <div className="tagCloud">
              <span title="31-60s (1 Visits)" className="word size4">31-60s</span>
              <span title="4-7 min (0 Visits)" className="word size6 valueIsZero">4-7 min</span>
              <span title="15-30 min (0 Visits)" className="word size6 valueIsZero">15-30 min</span>
              <span title="0-10s (4 Visits)" className="word size0">0-10s</span>
              <span title="2-4 min (1 Visits)" className="word size4">2-4 min</span>
              <span title="1-2 min (2 Visits)" className="word size2">1-2 min</span>
              <span title="7-10 min (1 Visits)" className="word size4">7-10 min</span>
              <span title="11-30s (4 Visits)" className="word size0">11-30s</span>
              <span title="30+ min (2 Visits)" className="word size2">30+ min</span>
              <span title="10-15 min (0 Visits)" className="word size6 valueIsZero">10-15 min</span>
            </div>
            <FooterWidget limitSelection={true} />

          </WidgetContent>
        </Widget >

      </div >
    )
  }
}


export default FrequencyOverview;
