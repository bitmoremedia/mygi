import React, { PropTypes } from 'react'
import classNames from 'classnames'

import './style.scss'
import data from '../../data/gi-data.json'
import { sortArrayByMultipleProperties, isOfGiType, isNumber, giType } from '../../utils'

function filterFoodByText(foodItem, textFilter) {
  let match = false
  // filter based on name
  if (foodItem.name.toUpperCase().indexOf(textFilter.toUpperCase()) > -1) {
    match = true
  }
  // filter based on single GI value
  if (!match && isNumber(textFilter) && (parseFloat(textFilter) === foodItem.gi)) {
    match = true
  }
  // filter based on GI value range (e.g. 1-100)
  if (!match && (textFilter.split('-').length === 2)) {
    const range = textFilter.split('-')
    return (foodItem.gi >= range[0] && foodItem.gi <= range[1])
  }
  return match
}

const renderRow = ({ categoryFilter, category, gi, name, id }) => {
  const giTypeName = giType(gi)
  const giTypeClass = classNames('gi-data-table__gi-column', `gi-data-table__gi-column--${giTypeName}`)
  return (
    <tr key={id}>
      {
        !categoryFilter && <td className="gi-data-table__category-column">{category}</td>
      }
      <td className="gi-data-table__food-column">{name}</td>
      <td className={giTypeClass}>{gi}</td>
    </tr>
  )
}

renderRow.propTypes = {
  categoryFilter: PropTypes.string,
  category: PropTypes.string,
  gi: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
}

renderRow.defaultProps = {
  categoryFilter: '',
  category: '',
  gi: '',
  name: '',
  id: '',
}

const GiDataTable = ({ categoryFilter, giTypeFilter, textFilter }) => {
  // sort data by Category and Name
  let tableData = data.sort(sortArrayByMultipleProperties('category', 'name'))

  // filter by category
  if (categoryFilter) {
    tableData = tableData.filter(foodItem => (foodItem.category === categoryFilter))
  }

  // filter by gi type
  if (giTypeFilter && (giTypeFilter !== 'all')) {
    tableData = tableData.filter(foodItem => isOfGiType(foodItem.gi, giTypeFilter))
  }

  // apply any text filter
  if (textFilter) {
    tableData = tableData.filter(foodItem => filterFoodByText(foodItem, textFilter))
  }

  const tableRows = tableData.map(item => renderRow({ ...item, categoryFilter }))

  return (
    <div className="gi-data-table">
      <table className="gi-data-table__table">
        <thead>
          <tr>
            {
              !categoryFilter && <th className="gi-data-table__category-column">Category</th>
            }
            <th className="gi-data-table__food-column">Food</th>
            <th className="gi-data-table__gi-column">GI Value</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  )
}

GiDataTable.propTypes = {
  categoryFilter: PropTypes.string,
  giTypeFilter: PropTypes.string,
  textFilter: PropTypes.string,
}

GiDataTable.defaultProps = {
  categoryFilter: '',
  giTypeFilter: '',
  textFilter: '',
}

export default GiDataTable
