import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import './style';

class GiDataTextFilter extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showHelp: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.refs['text-filter'].blur();
  }

  handleChange = (event) => {
    this.props.setTextFilter(event.target.value);
  }

  clearFilter = () => {
    console.log('surely not!!');
    this.props.setTextFilter("");
  }

  onFocus = () => {
    this.setState({ showHelp: true });
  }

  onBlur = () => {
    this.setState({ showHelp: false });
  }

  render() {
    const placeholderText = 'Filter';
    const clearButton = <button className="gi-data-text-filter__clear-button"
                          onClick={this.clearFilter}>Clear</button>;
    const helpText = <div className="gi-data-text-filter__help-text">
                        Filter on 'Text' or a GI value range e.g. '1-30'</div>;
    return (
      <div className="gi-data-text-filter">
        <form className="gi-data-text-filter__form"
          onSubmit={this.handleSubmit}
        >
          <input className="gi-data-text-filter__input"
            type="text"
            ref="text-filter"
            name="text-filter"
            placeholder={placeholderText}
            value={this.props.textFilter}
            onChange={this.handleChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </form>
        {
          this.props.textFilter && clearButton
        }
        {
          this.state.showHelp && helpText
        }
      </div>
    );
  }
}

export default GiDataTextFilter;
