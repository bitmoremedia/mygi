import React, { Component } from 'react';
import Helmet from 'react-helmet';

import GiDataFilter from '../GiDataFilter';
import GiDataTextFilter from '../GiDataTextFilter';
import GiDataTableHeader from '../GiDataTableHeader';
import GiDataTable from '../GiDataTable';
import { categoryFromPath, giTypeFilterFromPath } from '../../utils';

class GiDataTablePage extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      textFilter: '',
    };
  }

  setTextFilter = (newValue) => {
    this.setState({
      textFilter: newValue
    });
  }

  render() {

    const categoryFilter = categoryFromPath(this.props.activePath);
    const giTypeFilter = giTypeFilterFromPath(this.props.activePath);
    return (
      <div>
        <Helmet
          title={this.props.title}
          meta={this.props.meta}
        />
        <GiDataTableHeader categoryFilter={categoryFilter} giTypeFilter={giTypeFilter} />
        <GiDataFilter categoryFilter={categoryFilter} giTypeFilter={giTypeFilter}/>
        <div className="js-only">
          <GiDataTextFilter textFilter={this.state.textFilter} setTextFilter={this.setTextFilter}/>
        </div>
        <GiDataTable categoryFilter={categoryFilter} giTypeFilter={giTypeFilter} textFilter={this.state.textFilter}/>
      </div>
    );
  }
}

export default GiDataTablePage;
