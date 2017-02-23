import { connect } from 'react-redux'

import FoodFinder from './component'

const mapStateToProps = state => ({
  foodList: state.foodList,
  dataSources: state.dataSources,
})

export default connect(mapStateToProps)(FoodFinder)
