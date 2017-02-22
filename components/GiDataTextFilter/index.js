import React, { Component, PropTypes } from 'react'

import './style.scss'

class GiDataTextFilter extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      showHelp: false,
    }
    this.textFilterInput = undefined
  }

  onFocus = () => {
    this.setState({ showHelp: true })
  }

  onBlur = () => {
    this.setState({ showHelp: false })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.textFilterInput.blur()
    this.onBlur()
  }

  handleChange = (event) => {
    this.props.setTextFilter(event.target.value)
  }

  clearFilter = () => {
    this.props.setTextFilter('')
  }

  render() {
    const { onFocus, onBlur, handleChange, handleSubmit, clearFilter } = this
    const { textFilter } = this.props
    const { showHelp } = this.state
    const placeholderText = 'Filter'
    const clearButton = (
      <button
        className="gi-data-text-filter__clear-button"
        onClick={clearFilter}
      >
       Clear
     </button>)
    const helpText = (
      <div className="gi-data-text-filter__help-text">
        {"Filter on 'Text' or a GI value range e.g. 1-30"}
      </div>)
    return (
      <div className="gi-data-text-filter">
        <form
          className="gi-data-text-filter__form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            className="gi-data-text-filter__input"
            type="text"
            autoComplete="off"
            ref={(c) => { this.textFilterInput = c }}
            name="text-filter"
            placeholder={placeholderText}
            value={textFilter}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </form>
        {
          textFilter && clearButton
        }
        {
          showHelp && helpText
        }
      </div>
    )
  }
}

GiDataTextFilter.propTypes = {
  setTextFilter: PropTypes.func.isRequired,
  textFilter: PropTypes.string.isRequired,
}

export default GiDataTextFilter
