import React from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import FooterWidget from '../FooterWidget/FooterWidget'
import Widget from '../Widget/Widget';
import Highcharts from 'highcharts/highmaps';
import addFunnel from 'highcharts/modules/funnel';
import myMap from '../Highcharts/world';
import { getUserCountry } from '../../../../api/webAnalytics';

import './visitormap.css'

// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
// const data = [
//   ['fo', 0],
//   ['um', 1],

// ];


class VisitorMap extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {


    // Create the chart
    var chart = Highcharts.mapChart('VisitorMap', {
      chart: {
        map: myMap,
        height: 200
      },

      title: {
        text: ''
      },

      subtitle: {
        // text: 'Source map: World, Miller projection, medium resolution'
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },

      colorAxis: {
        min: 0
      },
      // keys: ['code', 'nb_visits', 'average'],
      series: [{
        data: [],
        name: 'Visits',

        states: {
          hover: {
            color: '#BADA55'
          }
        },
        // dataLabels: {
        // enabled: true,
        // format: '{point.name}'
        // }
      }],
      tooltip: {
        //shared: true,
        useHTML: true,
        headerFormat: '<small>{point.key}</small><table>',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
        '<td style="text-align: right"><b>{point.value} {point.percentage}</b></td></tr>',
        footerFormat: '</table>',

      }
    });

    addFunnel(Highcharts);


    let info = {
      date: 'yesterday',
      idSite: 1
    }
    getUserCountry(info)
      .then((response) => {
        let data = response.map((item) => ([item.code, item.nb_visits]));
        chart.series[0].update({
          data: data
        });
      })
  }

  render() {

    return (
      <div className="visitor-map">
        <Widget>
          <WidgetTop WidgetName="Visitor Map" />
          <WidgetContent>
            <div id="VisitorMap"></div>
            <FooterWidget />
          </WidgetContent>
        </Widget >

      </div >
    )
  }
}


export default VisitorMap;
