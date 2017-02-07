import React from 'react';

import './style';
import data from '../../data/gi-data.json';
import { sortArrayByMultipleProperties, isOfGiType } from '../../utils';

const GiDataTable = ({ categoryFilter, giTypeFilter }) => {

  // sort data by Category and Name
  let tableData = data.sort(sortArrayByMultipleProperties('category', 'name'));

  // filter by category
  if (categoryFilter){
    tableData = tableData.filter(foodItem => (foodItem.category === categoryFilter));
  }

  // filter by gi type
  if (giTypeFilter && ( giTypeFilter !== 'all' )){
    tableData = tableData.filter(foodItem => (isOfGiType(foodItem.gi, giTypeFilter)));
  }

  const renderRow = ({category, gi, name, id}) => {
    return (
      <tr key={id}>
        <td className='gi-data-table__category-column'>{category}</td>
        <td className='gi-data-table__name-column'>{name}</td>
        <td className='gi-data-table__gi-column'>{gi}</td>
      </tr>
    );
  };

  const tableRows = tableData.map((item) => {
    return (
      renderRow(item)
    );
  });

  return (
    <div className='gi-data-table'>
      <table>
        <thead>
          <th className='gi-data-table__category-column'>Category</th>
          <th className='gi-data-table__food-column'>Food</th>
          <th className='gi-data-table__gi-column'>GI Value</th>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
};

export default GiDataTable;
