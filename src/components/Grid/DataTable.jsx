import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Text from 'components/Common/Text';
import { getDefaultSort } from 'utils/grid';
import Checkbox from 'material-ui/Checkbox';
import styles from './DataTable.scss';

const { oneOfType, string, bool, number, arrayOf, object, func, node } = PropTypes;

const DataTableColumn = ({ value, currentSorting, sortable, sortName, width, handleSort, isAllSelected, isSelected, selectAllDevices }) => {
  const onClick = sortable ? handleSort.bind(null, null, sortName) : () => null;
  const headerClassName = classnames(styles.headerColumn, { [styles.headerColumnSortable]: sortable });
  let sortIcon;

  if (sortable) {
    if (currentSorting && currentSorting.column === sortName) {
      sortIcon = currentSorting.order === 'asc' ? '↑' : '↓';
    } else {
      sortIcon = '↕';
    }
  }

  return (
    <th
      className={headerClassName}
      width={width}
      onClick={onClick}
    >
      <div className={styles.headerColumnWrapper}>
        <Text className={styles.columnText}> {value} </Text>
        {sortIcon &&
        <Text className={styles.sorter}>
          {sortIcon}
        </Text>
        }
        { (isAllSelected) ? <Checkbox onCheck={(event, checked) => selectAllDevices(checked)} checked={isSelected} /> : null}
      </div>
    </th>
  );
};

DataTableColumn.propTypes = {
  value: oneOfType([string, node]),
  currentSorting: object,
  sortable: bool,
  sortName: oneOfType([string, number]),
  width: string,
  handleSort: func,
  isAllSelected: bool,
  isSelected: bool,
  selectAllDevices: func,
};

const DataTableCell = ({ style, rowKey, index, row, subNullWithDash }) => (
  <td className={styles.dataColumn} style={style}>
    <Text className={classnames({ [styles.dataColumnStriped]: index % 2 })}>
      {row[rowKey] || (subNullWithDash ? '---' : '')}
    </Text>
  </td>
);

DataTableCell.propTypes = {
  rowKey: string,
  index: number,
  row: object,
  style: object,
  subNullWithDash: bool,
};

const DataTableRow = ({ row, index, columns, subNullWithDash }) => (
  <tr className={styles.striped}>
    {columns.map(({ key, style }, columnIndex) => (
      <DataTableCell
        key={columnIndex}
        index={index}
        row={row}
        rowKey={key}
        style={style}
        subNullWithDash={subNullWithDash}
      />
    ))}
  </tr>
);

DataTableRow.propTypes = {
  columns: arrayOf(object),
  row: object,
  index: number,
  subNullWithDash: bool,
};

export default class DataTable extends Component {
  static propTypes = {
    data: arrayOf(object),
    columns: arrayOf(object),
    onSort: func,
    subNullWithDash: bool,
    isSelected: bool,
    selectAllDevices: func,
  };

  state = {
    sorting: null,
  };

  changeSort = (e, column) => {
    const { props: { onSort }, state: { sorting: currentSorting } } = this;
    const order = !(currentSorting && currentSorting.column === column && currentSorting.order === 'asc');
    const newSorting = {
      column,
      order: order ? 'asc' : 'desc',
    };

    if (onSort) {
      onSort(newSorting);
    }

    this.setState({ sorting: newSorting });
  };

  render() {
    const {
      props: { columns, onSort, selectAllDevices, isSelected, data, subNullWithDash, ...rest },
      state: { sorting },
    } = this;

    let sortedData = [];

    if (sorting && !onSort) {
      const { column, order } = this.state.sorting;
      sortedData = data.sort(getDefaultSort(column, order));
    } else {
      sortedData = data;
    }

    return (
      <table className={styles.base} {...rest}>
        <thead>
          <tr>
            {columns.map(({ key, value, sortable, sortName, width, isAllSelected }) => (
              <DataTableColumn
                key={key}
                value={value}
                currentSorting={sorting}
                sortable={sortable}
                sortName={sortName}
                width={width}
                handleSort={this.changeSort}
                isAllSelected={isAllSelected}
                isSelected={isSelected}
                selectAllDevices={selectAllDevices}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <DataTableRow
              key={rowIndex}
              row={row}
              index={rowIndex}
              columns={columns}
              subNullWithDash={subNullWithDash}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
