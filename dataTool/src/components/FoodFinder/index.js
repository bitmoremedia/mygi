import {connect} from 'react-redux';

import FoodFinder from './component';

const mapStateToProps = (state, props) => {
  return {
    foodList: state.foodList,
    dataSources: state.dataSources,
  };
};

export default connect(mapStateToProps)(FoodFinder);
