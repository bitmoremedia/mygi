import React, { PropTypes } from 'react';

import { Container, Table, TableHead, TableHeading, TableRow, TableBody, TableColumn } from './styles';

const TableComponent = ({columns, data}) => {

  const renderHeadings = () => {
    return columns.map((column)=><TableHeading key={`${column.key}-heading`}>{column.label}</TableHeading>);
  };

  const renderColumn = ({key, value, index})=>{
    return <TableColumn key={`${key}-${columns[index].key}`}>{value}</TableColumn>;
  };

  const renderColumns = (columnData) => {
    return columnData.map((data, index)=>renderColumn({...data, index}));
  };

  const renderRows = () => {
    return data.map((columnData)=><TableRow key={`${columnData[0].key}-row`}>{renderColumns(columnData)}</TableRow>);
  };

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            {renderHeadings()}
          </TableRow>
        </TableHead>
        <TableBody>
          {renderRows()}
        </TableBody>
      </Table>
    </Container>
  );
}

TableComponent.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};

export default TableComponent;
