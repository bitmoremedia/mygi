import { connect } from 'react-redux'

import FoodSource from './component'

const mapStateToProps = state => ({
  foodList: state.foodList,
  dataSources: state.dataSources,
})

export default connect(mapStateToProps)(FoodSource)
