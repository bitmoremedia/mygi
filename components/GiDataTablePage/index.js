import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import { categoryFromPath, giTypeFilterFromPath } from '../../utils'

import GiDataFilter from '../GiDataFilter'
import GiDataTextFilter from '../GiDataTextFilter'
import GiDataTableHeader from '../GiDataTableHeader'
import GiDataTable from '../GiDataTable'


class GiDataTablePage extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      textFilter: '',
    }
  }

  setTextFilter = (newValue) => {
    this.setState({
      textFilter: newValue
    })
  }

  render() {

    const { setTextFilter } = this
    const { activePath, title, meta } = this.props
    const { textFilter } = this.state
    const categoryFilter = categoryFromPath(activePath)
    const giTypeFilter = giTypeFilterFromPath(activePath)
    return (
      <div>
        <Helmet
          title={title}
          meta={meta}
        />
        <GiDataTableHeader categoryFilter={categoryFilter} giTypeFilter={giTypeFilter} />
        <GiDataFilter categoryFilter={categoryFilter} giTypeFilter={giTypeFilter}/>
        <div className="js-only">
          <GiDataTextFilter textFilter={textFilter} setTextFilter={setTextFilter}/>
        </div>
        <GiDataTable categoryFilter={categoryFilter} giTypeFilter={giTypeFilter} textFilter={textFilter}/>
      </div>
    )
  }
}

GiDataTablePage.propTypes = {
  activePath: PropTypes.string
}

GiDataTablePage.defaultProps = {
  activePath: ''
}

export default GiDataTablePage
