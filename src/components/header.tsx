import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Nav from "./nav";

const Header = ({ siteTitle }) => (
  <div className="grid grid-cols-12">
    <div className="col-start-2 col-span-10">
      <Nav/>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
