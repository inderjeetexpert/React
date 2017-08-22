import React from 'react';
import './footerwidget.css'
class FooterWidget extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let { limitSelection } = this.props;

    return (
      <div className="dataTableFooterNavigation">
        <div className="row">
          <div className="col-md-9 col-sm-12 dataTableControls">

            <a className="dropdown-button dataTableAction activateExportSelection" title="Export this dataset in other formats" data-activates="dropdownExport324984"><span className="piwik-icon-export"></span></a>
            <ul className="dropdown-content exportToFormatItems">
              <li><a target="_blank" href="index.php?module=API&amp;method=API.get&amp;format=CSV&amp;idSite=1&amp;period=day&amp;date=2017-07-21,2017-08-19&amp;date=2017-07-21%2C2017-08-19&amp;filter_limit=false&amp;format_metrics=1&amp;expanded=1&amp;translateColumnNames=1&amp;language=en">CSV</a></li>
              <li><a target="_blank" href="index.php?module=API&amp;method=API.get&amp;format=TSV&amp;idSite=1&amp;period=day&amp;date=2017-07-21,2017-08-19&amp;date=2017-07-21%2C2017-08-19&amp;filter_limit=false&amp;format_metrics=1&amp;expanded=1&amp;translateColumnNames=1&amp;language=en">TSV (Excel)</a></li>
              <li><a target="_blank" href="index.php?module=API&amp;method=API.get&amp;format=XML&amp;idSite=1&amp;period=day&amp;date=2017-07-21,2017-08-19&amp;date=2017-07-21%2C2017-08-19&amp;filter_limit=false&amp;format_metrics=1&amp;expanded=1">XML</a></li>
              <li><a target="_blank" href="index.php?module=API&amp;method=API.get&amp;format=JSON&amp;idSite=1&amp;period=day&amp;date=2017-07-21,2017-08-19&amp;date=2017-07-21%2C2017-08-19&amp;filter_limit=false&amp;format_metrics=1&amp;expanded=1">Json</a></li>
              <li><a target="_blank" href="index.php?module=API&amp;method=API.get&amp;format=PHP&amp;idSite=1&amp;period=day&amp;date=2017-07-21,2017-08-19&amp;date=2017-07-21%2C2017-08-19&amp;filter_limit=false&amp;format_metrics=1&amp;expanded=1">Php</a></li>
              <li><a target="_blank" href="index.php?module=API&amp;method=API.get&amp;format=RSS&amp;idSite=1&amp;period=day&amp;date=2017-07-21,2017-08-19&amp;date=2017-07-21%2C2017-08-19&amp;filter_limit=false&amp;format_metrics=1&amp;expanded=1&amp;translateColumnNames=1&amp;language=en">
                <span className="piwik-icon-feed"></span> RSS
                    </a>
              </li>
              <li><a className="tableIcon">
                <span className="piwik-icon-image"></span>
                Export as Image
                    </a>
              </li>
            </ul>

            <a className="dataTableAction annotationView" title="View notes for this date range.">
              <span className="piwik-icon-annotation"></span>
            </a>
            <ul className="dropdown-content tableConfiguration">

            </ul>
          </div>
          {limitSelection &&
            <div className="col-md-3 col-sm-12 limitSelection" title="Rows to display" alt="Rows to display">
              <div className="input-field">
                <div className="select-wrapper">
                  <span className="caret"></span>
                  <input type="text" className="select-dropdown" readOnly="true" value="30" />
                  <ul className="dropdown-content select-dropdown">
                    <li className="">
                      <span>8</span>
                    </li>
                    <li className="">
                      <span>30</span>
                    </li>
                    <li className="">
                      <span>60</span>
                    </li>
                    <li className="">
                      <span>90</span>
                    </li>
                    <li className="">
                      <span>180</span>
                    </li>
                    <li className="">
                      <span>365</span>
                    </li>
                    <li className=""><span>500</span></li>
                  </ul>
                  <select defaultValue="30" className="initialized">
                    <option value="8">8</option><option value="30">30</option><option value="60">60</option><option value="90">90</option><option value="180">180</option><option value="365">365</option><option value="500">500</option></select>
                </div>
              </div>
            </div>}
        </div>
      </div>
    )
  }
}


export default FooterWidget;
