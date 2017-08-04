import React, { PropTypes, Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import PencilIcon from 'react-icons/lib/fa/pencil';
// import Row from 'react-flexbox-grid/lib/components/Row';
// import Col from 'react-flexbox-grid/lib/components/Col';
// import DataTable from 'components/Grid/DataTable';
import Checkbox from 'material-ui/Checkbox';
import email from './icons/email.svg';
import editIcon from './icons/edit.svg';
// import checkbox from './icons/checkbox.svg'
import styles from './List.scss';

const { string, array } = PropTypes;

class List extends Component {
  // static propTypes = {
  //   airtimePlansHistory: array,
  // };
  
  render() {
    // const {
    //   airtimePlansHistory,
    // } = this.props;
    const dataJson = {"List":[{"Name":"Syed Rahman Ali","Company":"Carderock","Location":"Newyork","Number":"+118536","Email":"syes@cardrock.com"},{"Name":"Ali","Company":"Google","Location":"London","Number":"+123218536","Email":"ali@google.com"},{"Name":"Haseeb","Company":"Yahoo","Location":"Newyork","Number":"+11558536","Email":"haseeb@cardrock.com"},{"Name":"Syed Rahman Ali","Company":"Netflix","Location":"Paris","Number":"+118536","Email":"syes@cardrock.com"},{"Name":"Syed Rahman Ali","Company":"ONGC","Location":"Newyork","Number":"+118536","Email":"syes@cardrock.com"},{"Name":"Syed Rahman Ali","Company":"Microsoft","Location":"Canada","Number":"+118536","Email":"syes@cardrock.com"},{"Name":"Syed Rahman Ali","Company":"Carderock","Location":"Maxico","Number":"+118536","Email":"syes@cardrock.com"},{"Name":"Rohit","Company":"Spliceglobal","Location":"India","Number":"+92118536","Email":"rohiy@spliceglobal.com"}]};
    const dataList = [];
    for(var i=0; i < dataJson.List.length; i++) {
      console.log('NAME');
      const data = dataJson.List[i];
      console.log(data);
      dataList.push(<tr><td><MuiThemeProvider><Checkbox /></MuiThemeProvider></td><td>{data.Name}</td><td>{data.Name}</td><td>{data.Email}</td><td>{data.Name}</td><td>{data.Name}</td><td><span className={styles.align}><img src={email} role='presentation' /></span><span style={{ marginLeft: '20px' }}><img src={editIcon} role='presentation' /></span></td></tr>);
    }

    return (
      <div className={styles.dataContainer}>
        <div className={styles.tableContainer} style={{ marginLeft: '50px', marginTop: '50px' }}>
          <table style={{ width: '95%', align: 'center' }}>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Company</th>
              <th>Location</th>
              <th>Number</th>
              <th>Email</th>
              <th></th>
            </tr>
            {dataList}
          </table>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  className: string,
  title: string,
  dataList: array,
};

export default List;
