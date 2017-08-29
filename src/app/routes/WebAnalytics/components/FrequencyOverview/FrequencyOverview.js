import React, { Component } from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import './frequencyoverview.css'
import { getApi } from '../../../../api/webAnalytics';
import { SITE_URL } from '../../../../api/urls';
class FrequencyOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      visitsData: null,
      lastMonthDate: null,
      piwikKey: null
    }
  }
  componentDidMount() {
    var yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1));
    yesterdayDate = yesterdayDate.toJSON().slice(0, 10).replace(/-/g, '-');
    var lastMonthDate = new Date();
    lastMonthDate = new Date(lastMonthDate.setMonth(lastMonthDate.getMonth() - 1));
    lastMonthDate = lastMonthDate.toJSON().slice(0, 10).replace(/-/g, '-');
    let info = {
      idSite: 1,
      date: yesterdayDate
    }
    getApi(info)
      .then((response) => {
        this.setState({
          visitsData: response,
          date: yesterdayDate,
          lastMonthDate,
          piwikKey: localStorage.getItem('piwik-key')
        });
      })
  }
  render() {
    let { visitsData, date, lastMonthDate, piwikKey } = this.state;
    var minutes, seconds;
    if (visitsData) {
      minutes = Math.floor(visitsData.avg_time_on_site / 60);
      seconds = visitsData.avg_time_on_site - minutes * 60;
    }
    return (

      <div className="frequency-overview">
        <Widget>
          <WidgetTop WidgetName="Frequency Overview" />
          {visitsData ?
            <WidgetContent>
              <div className="row">
                <div className="col-md-6">
                  <div className="sparkline linked">
                    <img alt="image" width="100" height="25"
                      src={`${SITE_URL}index.php?date=${lastMonthDate},${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=nb_visits%2Cnb_uniq_visitors&token_auth=${piwikKey}`} />
                    <span title="If a visitor comes to your website for the first time or if they visit a page more than 30 minutes after their last page view, this will be recorded as a new visit.">
                      <strong>{visitsData.nb_visits}</strong> returing visits,
                  </span>
                  </div>
                  <div className="sparkline linked">
                    <img alt="image" width="100" height="25"
                      src={`${SITE_URL}index.php?date=${lastMonthDate},${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=nb_actions_per_visit&token_auth=${piwikKey}`} />

                    <span title="The average number of actions (page views, site searches, downloads or outlinks) that were performed during the visits.">
                      <strong>{visitsData.nb_actions_per_visit}</strong>  actions per returning visit
                    </span>
                  </div>
                  <div className="sparkline linked">
                    <img alt="image" width="100" height="25"
                      src={`${SITE_URL}index.php?date=${lastMonthDate},${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=nb_pageviews%2Cnb_uniq_pageviews&token_auth=${piwikKey}`} />
                    <span title="The number of times this page was visited.">
                      <strong>{visitsData.nb_pageviews}</strong>  actions by the returning visits
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="sparkline linked">
                    <img alt="image" width="100" height="25"
                      src={`${SITE_URL}index.php?date=${lastMonthDate},${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=avg_time_on_site&token_auth=${piwikKey}`} />

                    <span title="The average duration of a visit.">
                      <strong>{minutes} min {seconds}s</strong>  average visit duration for returning visitors
                    </span>
                  </div>
                  <div className="sparkline linked">
                    <img alt="image" width="100" height="25"
                      src={`${SITE_URL}index.php?date=${lastMonthDate},${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=bounce_rate&token_auth=${piwikKey}`} />
                    <span title="The percentage of visits that only had a single pageview. This means, that the visitor left the website directly from the entrance page.">
                      <strong>{visitsData.bounce_rate}</strong>  returning visits have bounced (left the website after one page)
                    </span>
                  </div>
                </div>
              </div>
            </WidgetContent> :
            <div className="loading">please wait</div>}
        </Widget >

      </div >
    )
  }
}


export default FrequencyOverview;
