import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { associateDataSource } from '../../../actions';

import FoodList from './component';

const mapStateToProps = () => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ associateDataSource }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);
