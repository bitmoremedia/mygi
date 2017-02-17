import React, { Component } from 'react'

import { search } from '../../utils/search'

const data = [
  { "name": "Paul" },
  { "name": "Barry"},
  { "name": "Larry"},
  { "name": "Beth"},
  { "name": "Bill Oddy"},
  { "name": "Steve Coogan"},
  { "name": "russthedude"},
  { "name": "Dwayne/Dibbly"},
  { "name": "Dwayne Dibbly"},
  { "name": "Dwayne-Dibbly"},
  { "name": "Darren Dibbly"},
  { "name": "Pear, raw"},
]

class SearchUtility extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      searchText: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState(
      {[event.target.name]: event.target.value}
    );
  }

  render() {
    const { handleChange } = this
    const { searchText } = this.state

    const searchResults = search({
      searchText,
      searchList: data,
      searchField: 'name',
    });

    return (
      <div>
        <h1>Search Filter</h1>
        <input type='text' name='searchText' placeholder="Search Text" value={searchText} autoComplete="off" onChange={handleChange} />
        <h2>Filtered List</h2>
        <ul>
          {searchResults.map((item)=><li key={item.name}>{item.name}</li>)}
        </ul>
        { searchResults.length === 0 && <span>No matches</span> }
        <h2>Full List</h2>
        <ul>
          {data.map((item)=><li key={item.name}>{item.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default SearchUtility
