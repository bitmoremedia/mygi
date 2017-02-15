import React from 'react';

const tableProps = {
  columns: React.PropTypes.array.isRequired,
  data: React.PropTypes.array.isRequired
}

const Table = ({columns, data}) => {

  const renderHeadings = () => {
    return columns.map((column)=><th key={`${column.key}-heading`}>{column.label}</th>);
  };

  const renderColumn = ({key, value, index})=>{
    return <td key={`${key}-${columns[index].key}`}>{value}</td>;
  };

  const renderColumns = (columnData) => {
    return columnData.map((data, index)=>renderColumn({...data, index}));
  };

  const renderRows = () => {
    return data.map((columnData)=><tr key={`${columnData[0].key}-row`}>{renderColumns(columnData)}</tr>);
  };

  return (
    <table>
      <thead>
        <tr>
          {renderHeadings()}
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
}

Table.propTypes = tableProps;

export default Table;
