import React from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import FooterWidget from '../FooterWidget/FooterWidget';
import './visitovertime.css';

import ReactDOM from 'react-dom';
import fusioncharts from 'fusioncharts';
// Load the charts module


import charts from 'fusioncharts/fusioncharts.charts';
// import 'react-fusioncharts' from 'react-fusioncharts';
import ocean from 'fusioncharts/themes/fusioncharts.theme.ocean';
import ReactFC from 'react-fusioncharts';

// Pass fusioncharts as a dependency of charts
charts(FusionCharts)
var myDataSource = {
  "chart": {
    // "caption": "Actual Revenues, Targeted Revenues & Profits",
    // "subcaption": "Last year",
    // "xaxisname": "Month",
    // "yaxisname": "Amount (In USD)",
    // "numberprefix": "$",
    "theme": "ocean"
  },
  "categories": [{
    "category": [{
      "label": "Jan"
    }, {
      "label": "Feb"
    }, {
      "label": "Mar"
    }, {
      "label": "Apr"
    }, {
      "label": "May"
    }, {
      "label": "Jun"
    }, {
      "label": "Jul"
    }, {
      "label": "Aug"
    }, {
      "label": "Sep"
    }, {
      "label": "Oct"
    }, {
      "label": "Nov"
    }, {
      "label": "Dec"
    }]
  }],
  "dataset": [{
    "seriesname": "Projected Revenue",
    "renderas": "line",
    "showvalues": "0",
    "data": [{
      "value": "15000"
    }, {
      "value": "16000"
    }, {
      "value": "17000"
    }, {
      "value": "18000"
    }, {
      "value": "19000"
    }, {
      "value": "19000"
    }, {
      "value": "19000"
    }, {
      "value": "19000"
    }, {
      "value": "20000"
    }, {
      "value": "21000"
    }, {
      "value": "22000"
    }, {
      "value": "23000"
    }]
  }]
};

var chartConfigs = {
  id: "revenue-profits-chart",
  renderAt: "revenue-profits-chart-container",
  type: "mscombi2d",
  width: '100%',
  height: 400,
  dataFormat: "json",
  dataSource: myDataSource
};
class VisitOverTime extends React.Component {
  constructor(props) {
    super(props);

  }



  componentDidMount() {

  };
  render() {

    return (
      <div className="visit-over-time">
        <Widget>
          <WidgetTop WidgetName="Visit Over Time" />
          <WidgetContent>
            <div className="chart-wrapper">
              <ReactFC {...chartConfigs} />
            </div>

            <FooterWidget limitSelection={true} />
          </WidgetContent>
        </Widget >

      </div >
    )
  }
}


export default VisitOverTime;
