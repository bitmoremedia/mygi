import { connect } from 'react-redux'

import BreadCrumb from './component'

const mapStateToProps = state => ({ dataSources: state.dataSources })

export default connect(mapStateToProps)(BreadCrumb)
