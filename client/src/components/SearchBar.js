import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <input
        placeholder="Search for a character or actor"
        aria-label="Search for a character or actor"
      />
    )
  }
}

export default SearchBar
