import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFoodItem } from '../../redux/actions';

import AddFood from './component';

const mapStateToProps = (state, props) => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFoodItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);
