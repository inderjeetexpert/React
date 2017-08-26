import React from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import './visitsoverview.css'
import { getApi } from '../../../../api/webAnalytics';
import { SITE_URL } from '../../../../api/urls';
class VisitsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      visitsData: null,
      lastMonthDate: null
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
        this.setState({ visitsData: response, date: yesterdayDate, lastMonthDate });
      })
  }
  render() {
    let { visitsData, date, lastMonthDate } = this.state;
    var minutes, seconds;
    if (visitsData) {
      minutes = Math.floor(visitsData.avg_time_on_site / 60);
      seconds = visitsData.avg_time_on_site - minutes * 60;
    }
    return (
      <div className="visits-overview">
        <Widget>
          <WidgetTop WidgetName="Visits Overview" />
          {visitsData ?
            <WidgetContent>
              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=${lastMonthDate},${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=nb_visits%2Cnb_uniq_visitors`} />

                <span title="If a visitor comes to your website for the first time or if they visit a page more than 30 minutes after their last page view, this will be recorded as a new visit.">
                  <strong>{visitsData.nb_visits}</strong> visits,
               </span>
                <span title="The number of unduplicated visitors coming to your website. Every user is only counted once, even if they visit the website multiple times a day.">
                  <strong> {visitsData.nb_uniq_visitors} </strong> unique visitors
              </span>
              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=${lastMonthDate},${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=avg_time_on_site`} />

                <span title="The average duration of a visit.">
                  <strong>{minutes} min {seconds}s</strong>  average visit duration
                </span>

              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=${lastMonthDate},${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=bounce_rate`} />
                <span title="The percentage of visits that only had a single pageview. This means, that the visitor left the website directly from the entrance page.">
                  <strong>{visitsData.bounce_rate}</strong> visits have bounced (left the website after one page)
                </span>
              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=${lastMonthDate},${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=nb_actions_per_visit`} />

                <span title="The average number of actions (page views, site searches, downloads or outlinks) that were performed during the visits.">
                  <strong>{visitsData.nb_actions_per_visit}</strong> actions (page views, downloads, outlinks and internal site searches) per visit
                </span>

              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=${lastMonthDate},${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=avg_time_generation`} />

                <span title="The average time it took to generate the page. This metric includes the time it took the server to generate the web page, plus the time it took for the visitor to download the response from the server. A lower 'Avg. generation time' means a faster website for your visitors!">
                  <strong>{visitsData.avg_time_generation}</strong> average generation time
                </span>
              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=${lastMonthDate},${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=nb_pageviews%2Cnb_uniq_pageviews`} />

                <span title="The number of times this page was visited.">
                  <strong>{visitsData.nb_pageviews}</strong>  pageviews,
              </span>
                <span title="The number of visits that included this page. If a page was viewed multiple times during one visit, it is only counted once.">
                  <strong>{visitsData.nb_uniq_pageviews}</strong> unique pageviews
              </span>
              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=${lastMonthDate},${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=nb_searches%2Cnb_keywords`} />

                <span title="The number of visits that searched for this keyword on your website's search engine.">
                  <strong>{visitsData.nb_searches}</strong>  total searches on your website,
                </span>
                <span>
                  <strong>{visitsData.nb_keywords}</strong> unique
                </span>

              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=${lastMonthDate},${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=nb_downloads%2Cnb_uniq_downloads`} />

                <span title="The number of times this link was clicked.">
                  <strong>{visitsData.nb_downloads}</strong> downloads,
                </span>
                <span title="The number of visits that involved a click on this link. If a link was clicked multiple times during one visit, it is only counted once.">
                  <strong>{visitsData.nb_uniq_downloads}</strong> unique downloads
                </span>
              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=${lastMonthDate},${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=nb_outlinks%2Cnb_uniq_outlinks`} />

                <span title="The number of times this link was clicked.">
                  <strong>{visitsData.nb_outlinks}</strong> outlinks,
                </span>
                <span title="The number of visits that involved a click on this link. If a link was clicked multiple times during one visit, it is only counted once.">
                  <strong>{visitsData.nb_uniq_outlinks}</strong> unique outlinks
                </span>
              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=${lastMonthDate},${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=max_actions`} />
                <span>
                  <strong>{visitsData.max_actions}</strong> max actions in one visit
              </span>
              </div>
            </WidgetContent> :
            <div className="loading">please wait</div>}
        </Widget >

      </div >
    )
  }
}


export default VisitsOverview;
