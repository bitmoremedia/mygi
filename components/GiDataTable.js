import React from 'react';

import data from '../data/gi-data.json';
import { sortArrayByMultipleProperties } from '../utils';

const GiDataTable = ({ categoryFilter }) => {

  //console.log('*** GiDataTable ***');
  //console.log({categoryFilter, data});

  // sort data by Category and Name
  let tableData = data.sort(sortArrayByMultipleProperties('category', 'name'));

  // filter by category
  if (categoryFilter){
    tableData = tableData.filter(foodItem => (foodItem.category === categoryFilter));
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
