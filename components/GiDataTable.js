import React from 'react';

import data from '../data/gi-data.json';
import { sortArrayByMultipleProperties, isOfGiType } from '../utils';

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
        <td>{category}</td>
        <td>{name}</td>
        <td>{gi}</td>
      </tr>
    );
  };

  const tableRows = tableData.map((item) => {
    return (
      renderRow(item)
    );
  });

  return (
    <div>
      <table>
        <thead>
          <th>Category</th>
          <th>Food</th>
          <th>GI Value</th>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
};

export default GiDataTable;
