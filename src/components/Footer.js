import React from 'react'
import { Link } from "gatsby"
import InstagramSVG from "../Icons/InstagramSVG"
import LinkedInSVG from "../Icons/LinkedInSVG"
import MediumSVG from "../Icons/MediumSVG"
import TwitterSVG from "../Icons/TwitterSVG"

const Footer = () => {
  return (
    <div className="footer-container">
      <hr className="horizontal-line" />
      <div className="footer-content-container">
        <div className="copyright">© 2020 &nbsp;
          <Link to="/" style={{ textDecoration: "none", color: "black"}}>Aku</Link>
        </div>
        <div className="social-icons-container">
          <a href="https://twitter.com/akbarkh48644401">
            <TwitterSVG />
          </a>
          <a href="https://medium.com/@aakuukhan">
            <MediumSVG />
          </a>
          <a href="https://www.linkedin.com/">
            <LinkedInSVG />
          </a>
          <a href="https://www.instagram.com/">
            <InstagramSVG />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;