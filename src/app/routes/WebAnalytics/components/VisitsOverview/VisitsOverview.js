import React from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import './visitsoverview.css'
import { visitsSummaryGet } from '../../../../api/webAnalytics';
import { SITE_URL } from '../../../../api/urls';
class VisitsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      visitsData: {}
    }
  }
  componentDidMount() {
    let info = {
      idSite: 1
    }
    visitsSummaryGet(info)
      .then((response) => {
        let result = []
        for (var i in response)
          result.push([i, response[i]]);
        let data = result[0];
        this.setState({ date: data[0] });
        this.setState({ visitsData: result[0][1] });
      })
  }
  render() {
    let { date, visitsData } = this.state;
    console.log(visitsData);
    let minutes = Math.floor(visitsData.avg_time_on_site / 60);
    let seconds = visitsData.avg_time_on_site - minutes * 60;
    return (
      <div className="visits-overview">
        <Widget>
          <WidgetTop WidgetName="Visits Overview" />
          {visitsData ?
            <WidgetContent>
              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=2017-07-21,${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=nb_visits%2Cnb_uniq_visitors`} />

                <span title="If a visitor comes to your website for the first time or if they visit a page more than 30 minutes after their last page view, this will be recorded as a new visit.">
                  <strong>{visitsData.nb_visits}</strong> visits,
               </span>
                <span title="The number of unduplicated visitors coming to your website. Every user is only counted once, even if they visit the website multiple times a day.">
                  <strong> {visitsData.nb_uniq_visitors} </strong> unique visitors
              </span>
              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=2017-07-21,${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=avg_time_on_site`} />

                <span title="The average duration of a visit.">
                  <strong>{minutes} min {seconds}s</strong>  average visit duration
                </span>

              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=2017-07-21,${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=bounce_rate`} />
                <span title="The percentage of visits that only had a single pageview. This means, that the visitor left the website directly from the entrance page.">
                  <strong>{visitsData.bounce_rate}</strong> visits have bounced (left the website after one page)
                </span>
              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=2017-07-21,${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=nb_actions_per_visit`} />

                <span title="The average number of actions (page views, site searches, downloads or outlinks) that were performed during the visits.">
                  <strong>{visitsData.nb_actions_per_visit}</strong> actions (page views, downloads, outlinks and internal site searches) per visit
                </span>

              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=2017-07-21,${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=avg_time_generation`} />

                <span title="The average time it took to generate the page. This metric includes the time it took the server to generate the web page, plus the time it took for the visitor to download the response from the server. A lower 'Avg. generation time' means a faster website for your visitors!">
                  <strong>{visitsData.avg_time_generation}</strong> average generation time
                </span>
              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=2017-07-21,${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=nb_pageviews%2Cnb_uniq_pageviews`} />

                <span title="The number of times this page was visited.">
                  <strong>1</strong>  pageviews,
              </span>
                <span title="The number of visits that included this page. If a page was viewed multiple times during one visit, it is only counted once.">
                  <strong>1</strong> unique pageviews
              </span>
              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=2017-07-21,${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=nb_searches%2Cnb_keywords`} />

                <span title="The number of visits that searched for this keyword on your website's search engine.">
                  <strong>1</strong>  total searches on your website,
              </span>
                <span>
                  <strong>1</strong>  total searches on your website,
              </span>

              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=2017-07-21,${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=bounce_rate`} />

                <span title="If a visitor comes to your website for the first time or if they visit a page more than 30 minutes after their last page view, this will be recorded as a new visit.">
                  <strong>1</strong> visits,
              </span>
                <span title="The number of unduplicated visitors coming to your website. Every user is only counted once, even if they visit the website multiple times a day.">
                  <strong>1</strong> unique keywords
              </span>
              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=2017-07-21,${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=nb_searches%2Cnb_keywords`} />

                <span title="If a visitor comes to your website for the first time or if they visit a page more than 30 minutes after their last page view, this will be recorded as a new visit.">
                  <strong>1</strong> visits,
              </span>
                <span title="The number of unduplicated visitors coming to your website. Every user is only counted once, even if they visit the website multiple times a day.">
                  <strong>1</strong> unique visitors
              </span>
              </div>

              <div className="sparkline">
                <img alt="image" width="100" height="25"
                  src={`${SITE_URL}index.php?date=2017-07-21,${date}&forceView=1&viewDataTable=sparkline&module=API&action=get&widget=1&idSite=1&period=day&columns=bounce_rate`} />

                <span title="If a visitor comes to your website for the first time or if they visit a page more than 30 minutes after their last page view, this will be recorded as a new visit.">
                  <strong>1</strong> visits,
              </span>
                <span title="The number of unduplicated visitors coming to your website. Every user is only counted once, even if they visit the website multiple times a day.">
                  <strong>1</strong> unique visitors
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
