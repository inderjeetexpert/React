import React, { Component } from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import FooterWidget from '../FooterWidget/FooterWidget';
import './users.css';


class Users extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="users-view">
        <Widget>
          <WidgetTop WidgetName="Users" />

          <WidgetContent>
            <div className="dataTableWrapper">
              <div className="pk-emptyDataTable">
                There is no data for this report.
                </div>

            </div>
            <FooterWidget limitSelection={true} />
          </WidgetContent>
        </Widget >

      </div >
    )
  }
}

export default Users;
