import React, { Component } from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import FooterWidget from '../FooterWidget/FooterWidget';
import './visitorlog.css';
// import { } from '../../../../api/webAnalytics';


class VisitorLog extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="visit-over-time">
        <Widget>
          <WidgetTop WidgetName="Visit Over Time" />

          <WidgetContent>

            <div className="visitor-log">
              <div className="dataTableWrapper">
                <div className="card row hoverable">

                  <a className="visitor-log-visitor-profile-link visitorLogTooltip" title="View visitor profile">
                    <img src="images/piwik/plugins/Live/images/visitorProfileLaunch.png" />
                    <span>View visitor profile</span>
                  </a>

                  <div className="col-md-3">
                    <strong className="visitorLogTooltip" title="This visitor's last visit was 0 days ago.">
                      Friday, August 25, 2017
                    - 21:24:31</strong>
                    <br />
                    <span className="visitorLogTooltip" title="Visitor ID: bb0e21cc7d66a3b9 Lahore, Punjab, Pakistan GPS (lat/long): 31.550000,74.344000">
                      IP: 103.255.0.0
                    </span>
                    <br />
                    <span className="visitorLogIconWithDetails">
                      <img src="images/piwik/plugins/Live/images/returningVisitor.png" />

                      <ul className="details">
                        <li>Returning Visitor - 37 visits</li>
                      </ul>
                    </span>
                    <span className="visitorLogIconWithDetails flag">

                      <img height="16px" src="images/piwik/plugins/Morpheus/icons/dist/flags/pk.png" />

                      Lahore, Punjab
                        <ul className="details">
                        <li>Country: Pakistan</li>
                        <li>Region: Punjab</li>
                        <li>City: Lahore</li>
                      </ul>
                    </span>
                    <div className="visitorReferrer">
                      Direct Entry
										</div>

                  </div>

                  <div className="col-md-2 own-visitor-column">

                    <span className="visitorLogIcons">

                      <span className="visitorDetails">
                        <span className="visitorLogIconWithDetails">
                          <img src="images/piwik/plugins/Morpheus/icons/dist/browsers/CH.png" />
                          <ul className="details">
                            <li>Browser: Chrome 60.0</li>
                            <li>Browser engine: Blink</li>
                            <li>
                              Plugins:
													<img width="16px" height="16px" src="images/piwik/plugins/Morpheus/icons/dist/plugins/pdf.png" alt="Pdf" />
                              <img width="16px" height="16px" src="images/piwik/plugins/Morpheus/icons/dist/plugins/flash.png" alt="Flash" />
                            </li>
                          </ul>
                        </span>
                        <span className="visitorLogIconWithDetails">
                          <img src="images/piwik/plugins/Morpheus/icons/dist/os/WIN.png" />
                          <ul className="details">
                            <li>Operating system: Windows 10</li>
                          </ul>
                        </span>
                        <span className="visitorLogIconWithDetails">
                          <img src="images/piwik/plugins/Morpheus/icons/dist/devices/desktop.png" />
                          <ul className="details">
                            <li>Device type: Desktop</li>
                            <li>Device brand: Unknown</li>
                            <li>Resolution: 1366x768</li>
                          </ul>
                        </span>
                      </span>

                      <span className="visitorType">
                      </span>
                    </span>


                  </div>

                  <div className="col-md-7 column ">
                    <strong>
                      6 Actions - 8s</strong>
                    <div className="visitor-log-page-list">
                      <ol className="visitorLog">
                        <li className="action" title="Aug 25, 2017 21:24:31 https://carderockllc.com/business/search/ Generation time: 0.78s Time on page: 1s" value="1">
                          <div>
                            <a href="https://carderockllc.com/business/search/" target="_blank" className="action-list-url truncated-text-line">
                              carderockllc.com/business/search/
                    		</a>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FooterWidget limitSelection={true} />
          </WidgetContent>
        </Widget >

      </div >
    )
  }
}


export default VisitorLog;
