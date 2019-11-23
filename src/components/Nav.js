import React from "react"
import { Link } from "gatsby"

class Nav extends React.Component  {
  constructor() {
    super();
    this.state = {
      home_active: true,
      home_classname: "nav-item active-link",
      about_classname: "nav-item"
    }
  }
  
  clickHome = () => {
    if(this.state.home_active === false) {
      this.setState({ 
        home_active: true,
        home_classname: "nav-item active-link",
        about_classname: "nav-item"
      });
    }
  }
  
  clickAbout = () => {
    if(this.state.home_active === true) {
      this.setState({ 
        home_active: false,
        home_classname: "nav-item",
        about_classname: "nav-item active-link"
      })
    }
  }
  
  render() {
    const { home_classname, about_classname } = this.state; 
    
    return(
      <div className="nav-container">
        <h1 className="nav-brand">Amelia</h1>
        <ul className="nav-item-container">
          <li className={home_classname} id="nav-home">
            <Link to="/" onClick={this.clickHome}>Home</Link>
            <div className="underline"></div>
          </li>
          <li className={about_classname}>
            <Link to="/about" onClick={this.clickAbout}>About</Link>
            <div className="underline"></div>
          </li>
        </ul>
      </div>
    );
  }
}


export default Nav;