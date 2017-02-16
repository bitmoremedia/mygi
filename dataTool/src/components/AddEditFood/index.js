import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFoodItem, deleteFoodItem } from '../../redux/actions';

import AddFood from './component';

const mapStateToProps = (state, props) => {
  let foodItem;
  if ( props.editFoodId && state.foodList ){
    foodItem = state.foodList[props.editFoodId];
  }
  return { foodItem };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFoodItem, deleteFoodItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);
