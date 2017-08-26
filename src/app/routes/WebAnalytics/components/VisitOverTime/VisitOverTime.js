import React from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import FooterWidget from '../FooterWidget/FooterWidget';
import './visitovertime.css';
import Highcharts from 'highcharts';
import addFunnel from 'highcharts/modules/funnel';
import { getApi } from '../../../../api/webAnalytics';


class VisitOverTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: null,
      date: null,
      lastMonthDate: null
    }

  }




  componentDidMount() {
    var chart = Highcharts.chart('VisitorOverTimeMap', {
      chart: {
        height: 200
      },
      title: {
        text: ''
      },
      // subtitle: {
      //   text: 'Source: thesolarfoundation.com'
      // },
      yAxis: {
        title: {
          text: ''
        }
      },
      xAxis: {
        categories: [],
        labels: {
          step: 15 // this will show every second label
        }
        // showEmpty: false
      },
      legend: {
        // layout: 'horizontal',
        align: 'center',
        // verticalAlign: 'bottom'
      },
      // plotOptions: {
      //   series: {
      //     pointInterval: 10
      //   }
      // },
      series: [{
        name: 'Visits',
        data: []
      }]

    });
    addFunnel(Highcharts);

    let info = {
      idSite: 1,
      date: 'last31'
    }
    getApi(info)
      .then((response) => {
        // let data = _.values(response);
        let modifiedData = _(response).mapValues((value, id) => _.merge({}, value, { id })).values().value()
        // toArray
        let xAxisCategories = modifiedData.map((item) => ((new Date(item.id))).toDateString());
        let visits = modifiedData.map((item) => ([(new Date(item.id)).toDateString(), item.nb_visits ? item.nb_visits : 0]))
        // console.log(modifiedData, xAxisCategories, visits);
        chart.xAxis[0].update({
          categories: xAxisCategories
        })
        chart.series[0].update({
          data: visits
        });


      })




  }
  componentWillUnmount() {

  }
  render() {

    return (
      <div className="visit-over-time">
        <Widget>
          <WidgetTop WidgetName="Visit Over Time" />

          <WidgetContent>
            <div className="chart-wrapper">

              <div id="VisitorOverTimeMap"></div>

            </div>

            <FooterWidget limitSelection={true} />
          </WidgetContent>
        </Widget >

      </div >
    )
  }
}


export default VisitOverTime;
