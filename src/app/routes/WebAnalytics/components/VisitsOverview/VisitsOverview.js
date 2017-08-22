import React from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import './visitsoverview.css'
class VisitsOverview extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="visits-overview">
        <Widget>
          <WidgetTop WidgetName="Visits Overview" />
          <WidgetContent>
            <div className="sparkline ">
              <img alt="" data-src="?date=2017-07-21,2017-08-19&amp;forceView=1&amp;viewDataTable=sparkline&amp;module=API&amp;action=get&amp;widget=1&amp;idSite=1&amp;period=day&amp;columns=nb_visits%2Cnb_uniq_visitors" width="100" height="25"
                src="https://piwik.carderockllc.com/index.php?date=2017-07-21,2017-08-19&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=bounce_rate&colors=%7B%22backgroundColor%22%3A%22%23ffffff%22%2C%22lineColor%22%3A%22%23162c4a%22%2C%22minPointColor%22%3A%22%23ff7f7f%22%2C%22maxPointColor%22%3A%22%2375bf7c%22%2C%22lastPointColor%22%3A%22%2355aaff%22%7D" />

              <span title="If a visitor comes to your website for the first time or if they visit a page more than 30 minutes after their last page view, this will be recorded as a new visit.">
                <strong>1</strong> visits,
                 </span>
              <span title="The number of unduplicated visitors coming to your website. Every user is only counted once, even if they visit the website multiple times a day.">
                <strong>1</strong> unique visitors            </span>
            </div>

          </WidgetContent>
        </Widget >

      </div >
    )
  }
}


export default VisitsOverview;
