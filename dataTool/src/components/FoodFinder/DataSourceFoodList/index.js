import React from 'react';
import ToolTip from '../../../components/common/ToolTip';

// import { Container } from './styles';

const dataSourceFoodListProps = {
  list: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      gi: React.PropTypes.any.isRequired,
      source: React.PropTypes.string.isRequired,
    })
  ).isRequired,
};

const DataSourceFoodList = ({ list }) => {

  const renderItem = (food) => {
    return (
      <li key={food.id}>
        {food.name} [{food.gi}]
        <ToolTip
          text={`${food.source} / ${food.id}`}
          position={'left'}
        >
          ?
        </ToolTip>
      </li>
    );
  }

  return (
    <div>
      <ul>
        {list.map((food)=>renderItem(food))}
      </ul>
    </div>
  );
};

DataSourceFoodList.propTypes = dataSourceFoodListProps;

export default DataSourceFoodList;
