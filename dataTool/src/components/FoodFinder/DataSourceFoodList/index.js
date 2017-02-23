import React, { PropTypes } from 'react'
import ToolTip from '../../../components/common/ToolTip'

const DataSourceFoodList = ({ list }) => {
  const renderItem = food =>
    <li key={food.id}>
      {food.name} [{food.gi}]
      <ToolTip
        text={`${food.source} / ${food.id}`}
        position={'left'}
      >
        ?
      </ToolTip>
    </li>

  return (
    <div>
      <ul>
        {list.map(food => renderItem(food))}
      </ul>
    </div>
  )
}

DataSourceFoodList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      gi: PropTypes.any.isRequired,
      source: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default DataSourceFoodList
