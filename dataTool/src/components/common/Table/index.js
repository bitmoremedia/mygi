import React, { PropTypes } from 'react'

import { Container, Table, TableHead, TableHeading, TableRow, TableBody, TableColumn } from './styled-components'

const TableComponent = ({ columns, data }) => {
  const renderHeadings = () => columns.map(column => <TableHeading key={`${column.key}-heading`}>{column.label}</TableHeading>)
  const renderColumn = ({ key, value, index }) => <TableColumn key={`${key}-${columns[index].key}`}>{value}</TableColumn>
  const renderColumns = columnData =>
    columnData.map((colData, index) => renderColumn({ ...colData, index }))
  const renderRows = () => data.map(columnData => <TableRow key={`${columnData[0].key}-row`}>{renderColumns(columnData)}</TableRow>)

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
  )
}

TableComponent.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.any.isRequired,
  })).isRequired,
  data: PropTypes.array.isRequired,
}

export default TableComponent
