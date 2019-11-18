import React from "react"
import { Link } from "gatsby"

const Nav = () => (
  <div className="nav-container">
    <h1 className="nav-brand">Amelia</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
)

export default Nav;