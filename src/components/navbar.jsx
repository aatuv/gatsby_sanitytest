import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ siteTitle }) => (
  <nav className="navbar" role="navigation">
    <div className="navbar-brand alc">
      <h1 className="title ml">Sanity.io with GatsbyJS test site</h1>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <div className="navbar-item">
          <Link className="is-size-4" to="/places">
            Places
          </Link>
        </div>
        <div className="navbar-item">
          <Link className="is-size-4" to="/districts">
            Districts
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
