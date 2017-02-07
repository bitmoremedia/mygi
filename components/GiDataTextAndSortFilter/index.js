import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import './style';

class GiDataTextAndSortFilter extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  handleChange(event) {
    this.props.setTextFilter(event.target.value);
  }

  clearFilter(){
    this.props.setTextFilter("");
  }

  render() {
    return (
      <div className="gi-data-text-and-sort-filter">
        <input className="gi-data-text-and-sort-filter__input" type="text" name="text-filter" placeholder="Filter" value={this.props.textFilter} onChange={this.handleChange} />
        {
          this.props.textFilter && <button className="gi-data-text-and-sort-filter__clear-button" onClick={this.clearFilter}>Clear</button>
        }
      </div>
    );
  }
}

export default GiDataTextAndSortFilter;
