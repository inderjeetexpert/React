import React, { Component } from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import FooterWidget from '../FooterWidget/FooterWidget';
import './customvariables.css';


class CustomVariables extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="custom-variables">
        <Widget>
          <WidgetTop WidgetName="Custom Variables" />

          <WidgetContent>

            <div className="dataTableWrapper">
              <div className="pk-emptyDataTable">
                There is no data for this report.
                </div>

            </div>
            <FooterWidget limitSelection={true} />
          </WidgetContent>
        </Widget>

      </div>
    )
  }
}

export default CustomVariables;
