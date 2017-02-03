import React from 'react';

import { sortArrayByProperty } from '../utils/arrays';

const GiDataTable = ({ data, filter }) => {

  // sort array by Category
  const tableData = data.sort(sortArrayByProperty('category'));

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
