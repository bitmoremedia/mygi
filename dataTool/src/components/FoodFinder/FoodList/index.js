import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { associateDataSource, deleteAssociatedDataSource } from '../../../redux/actions'

import FoodList from './component'

const mapStateToProps = () => {}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ associateDataSource, deleteAssociatedDataSource }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)
