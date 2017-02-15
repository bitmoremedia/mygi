import {connect} from 'react-redux';

import FoodList from './component';

const mapStateToProps = (state, props) => {
  return {
    foodList: state.foodList,
    dataSources: state.dataSources,
  };
};

export default connect(mapStateToProps)(FoodList);
