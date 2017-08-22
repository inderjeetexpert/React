import React from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import FooterWidget from '../FooterWidget/FooterWidget'
import Widget from '../Widget/Widget';
import './visitormap.css'
class VisitorMap extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="visitor-map">
        <Widget>
          <WidgetTop WidgetName="Visitor Map" />
          <WidgetContent>

            <FooterWidget />
          </WidgetContent>
        </Widget >

      </div >
    )
  }
}


export default VisitorMap;
