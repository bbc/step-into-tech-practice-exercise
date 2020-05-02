import React from 'react'

class Header extends React.Component {
  render() {
    const { children } = this.props
    return (
      <header className="header">
        <div className="header-content">
          <h1>Eastenders Database</h1>
          {children}
        </div>
      </header>
    )
  }
}

export default Header
