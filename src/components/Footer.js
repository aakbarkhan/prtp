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
        <div className="copyright">© 2019 Amelie</div>
        <div className="social-icons-container">
          <Link to="https://twitter.com/">
            <TwitterSVG />
          </Link>
          <Link to="https://medium.com/">
            <MediumSVG />
          </Link>
          <Link to="https://www.linkedin.com/">
            <LinkedInSVG />
          </Link>
          <Link to="https://www.instagram.com/">
            <InstagramSVG />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;