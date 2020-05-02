import React from 'react'

class Favourites extends React.Component {
  render() {
    return (
      <div className="spacer">
        <h2>My Favourites</h2>
        <small>
          No favourites here yet
          <span role="img" aria-label="sad face">
            😢
          </span>
        </small>
      </div>
    )
  }
}

export default Favourites
