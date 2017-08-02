import React, { PropTypes } from 'react';
// import PencilIcon from 'react-icons/lib/fa/pencil';
// import Row from 'react-flexbox-grid/lib/components/Row';
// import Col from 'react-flexbox-grid/lib/components/Col';
// import DataTable from 'components/Grid/DataTable';
// import Checkbox from 'material-ui/Checkbox';
import email from './icons/email.svg';
import editIcon from './icons/edit.svg';
import checkbox from './icons/checkbox.svg'
import styles from './List.scss';

const { string } = PropTypes;

const List = ({ className }) => {
  const styles = `header-container ${className}`;

  return (
    <div className={styles.dataContainer}>
      <div className={styles.tableContainer} style={{ marginLeft: '50px', marginTop: '50px' }}>
        <table style={{ width: '95%', align: 'center' }}>
          <tr>
            <th><img src={checkbox} role="presentation" className={styles.contactInfoIcon} /></th>
            <th>Name</th>
            <th>Company</th>
            <th>Location</th>
            <th>Number</th>
            <th>Email</th>
            <th></th>
          </tr>
          <tr>
            <td><img src={checkbox} role="presentation" className={styles.contactInfoIcon} /></td>
            <td>Syed Rahman Ali</td>
            <td>Carderock</td>
            <td>Californiya USA</td>
            <td>+123232323</td>
            <td>amar@carderock.com</td>
            <td><span className={styles.align}><img src={email} role="presentation" className={styles.contactInfoIcon} /></span>
            <span style={{ marginLeft: '20px' }}><img src={editIcon} role="presentation" className={styles.contactInfoIcon} /></span>
            </td>
          </tr>
          <tr>
            <td><img src={checkbox} role="presentation" className={styles.contactInfoIcon} /></td>
            <td>Haseeb Mohammad</td>
            <td>Google</td>
            <td>Mexico</td>
            <td>+1234321</td>
            <td>haseeb@google.com</td>
            <td><span className={styles.align}><img src={email} role="presentation" className={styles.contactInfoIcon} /></span>
            <span style={{ marginLeft: '20px' }}><img src={editIcon} role="presentation" className={styles.contactInfoIcon} /></span></td>
          </tr>
          <tr>
            <td><img src={checkbox} role="presentation" className={styles.contactInfoIcon} /></td>
            <td>Rohit</td>
            <td>Google</td>
            <td>Mexico</td>
            <td>+1234321</td>
            <td>haseeb@google.com</td>
            <td><span className={styles.align}><img src={email} role="presentation" className={styles.contactInfoIcon} /></span>
            <span style={{ marginLeft: '20px' }}><img src={editIcon} role="presentation" className={styles.contactInfoIcon} /></span></td>
          </tr>
          <tr>
            <td><img src={checkbox} role="presentation" className={styles.contactInfoIcon} /></td>
            <td>Haseeb Mohammad</td>
            <td>Google</td>
            <td>Mexico</td>
            <td>+1234321</td>
            <td>haseeb@google.com</td>
            <td><span className={styles.align}><img src={email} role="presentation" className={styles.contactInfoIcon} /></span>
            <span style={{ marginLeft: '20px' }}><img src={editIcon} role="presentation" className={styles.contactInfoIcon} /></span></td>
          </tr>
          <tr>
            <td><img src={checkbox} role="presentation" className={styles.contactInfoIcon} /></td>
            <td>Haseeb Mohammad</td>
            <td>Google</td>
            <td>Mexico</td>
            <td>+1234321</td>
            <td>haseeb@google.com</td>
            <td><span className={styles.align}><img src={email} role="presentation" className={styles.contactInfoIcon} /></span>
            <span style={{ marginLeft: '20px' }}><img src={editIcon} role="presentation" className={styles.contactInfoIcon} /></span></td>
          </tr>
          <tr>
            <td><img src={checkbox} role="presentation" className={styles.contactInfoIcon} /></td>
            <td>Haseeb Mohammad</td>
            <td>Google</td>
            <td>Mexico</td>
            <td>+1234321</td>
            <td>haseeb@google.com</td>
            <td><span className={styles.align}><img src={email} role="presentation" className={styles.contactInfoIcon} /></span>
            <span style={{ marginLeft: '20px' }}><img src={editIcon} role="presentation" className={styles.contactInfoIcon} /></span></td>
          </tr>
          <tr>
            <td><img src={checkbox} role="presentation" className={styles.contactInfoIcon} /></td>
            <td>Syed</td>
            <td>Google</td>
            <td>Mexico</td>
            <td>+1234321</td>
            <td>haseeb@google.com</td>
            <td><span className={styles.align}><img src={email} role="presentation" className={styles.contactInfoIcon} /></span>
            <span style={{ marginLeft: '20px' }}><img src={editIcon} role="presentation" className={styles.contactInfoIcon} /></span></td>
          </tr>
          <tr>
            <td><img src={checkbox} role="presentation" className={styles.contactInfoIcon} /></td>
            <td>Syed</td>
            <td>Google</td>
            <td>Mexico</td>
            <td>+1234321</td>
            <td>haseeb@google.com</td>
            <td><span className={styles.align}><img src={email} role="presentation" className={styles.contactInfoIcon} /></span>
            <span style={{ marginLeft: '20px' }}><img src={editIcon} role="presentation" className={styles.contactInfoIcon} /></span></td>
          </tr>
          <tr>
            <td><img src={checkbox} role="presentation" className={styles.contactInfoIcon} /></td>
            <td>Haseeb Mohammad</td>
            <td>Google</td>
            <td>Mexico</td>
            <td>+1234321</td>
            <td>haseeb@google.com</td>
            <td><span className={styles.align}><img src={email} role="presentation" className={styles.contactInfoIcon} /></span>
            <span style={{ marginLeft: '20px' }}><img src={editIcon} role="presentation" className={styles.contactInfoIcon} /></span></td>
          </tr><tr>
            <td><img src={checkbox} role="presentation" className={styles.contactInfoIcon} /></td>
            <td>Syed Rahman</td>
            <td>Google</td>
            <td>Mexico</td>
            <td>+1234321</td>
            <td>haseeb@google.com</td>
            <td><span className={styles.align}><img src={email} role="presentation" className={styles.contactInfoIcon} /></span>
            <span style={{ marginLeft: '20px' }}><img src={editIcon} role="presentation" className={styles.contactInfoIcon} /></span></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

List.propTypes = {
  className: string,
  title: string
};

export default List;
