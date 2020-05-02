import React from 'react'

class Card extends React.Component {
  render() {
    const { id, characterName, actorName, imageUrl } = this.props
    return (
      <div className="card">
        <img src={imageUrl} alt={characterName} />
        <h3>{characterName}</h3>
        <small>Played by: {actorName}</small>
      </div>
    )
  }
}

export default Card
