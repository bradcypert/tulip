import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Dropdown, Icon, ResponsiveNav } from 'rsuite';

const Header = ({ siteTitle }) => (
  <Navbar key={new Date().getTime}>
    <Navbar.Body>
      <Nav>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}>
          <div className="navbar-brand">
            BradCypert.com
          </div>
        </Link>
        <Dropdown key="1" trigger={['hover']} title="Language Specific Resources">
          <Link to="/clojure-resources">
            <Dropdown.Item>Clojure</Dropdown.Item>
          </Link>
          <Link to="/dart-resources">
            <Dropdown.Item>Dart</Dropdown.Item>
          </Link>
          <Link to="/golang-resources">
            <Dropdown.Item>Golang</Dropdown.Item>
          </Link>
          <Link to="/java-resources">
            <Dropdown.Item>Java</Dropdown.Item>
          </Link>
          <Link to="/javascript-resources">
            <Dropdown.Item>JavaScript / TypeScript</Dropdown.Item>
          </Link>
          <Link to="/kotlin-resources">
            <Dropdown.Item>Kotlin</Dropdown.Item>
          </Link>
          <Link to="/php-resources">
            <Dropdown.Item>PHP</Dropdown.Item>
          </Link>
          <Link to="/python-resources">
            <Dropdown.Item>Python</Dropdown.Item>
          </Link>
          <Link to="/scala-resources">
            <Dropdown.Item>Scala</Dropdown.Item>
          </Link>
        </Dropdown>
        <Dropdown key="2" trigger={['hover']} title="Apps">
          <Dropdown.Menu title="Image2Text">
            <a href="https://play.google.com/store/apps/details?id=com.bradcypert.image2text" target="_blank">
              <Dropdown.Item>On the Play Store</Dropdown.Item>
            </a>
            <Link to="/image2text-privacy-policy">
              <Dropdown.Item>Privacy Policy</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown key="3" trigger={['hover']} title="About">
          <Link to="/contact">
            <Dropdown.Item>Contact</Dropdown.Item>
          </Link>
          <Link to="/resume">
            <Dropdown.Item>Resume</Dropdown.Item>
          </Link>
        </Dropdown>
      </Nav>
      {/* <Nav pullRight>
        <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
      </Nav> */}
    </Navbar.Body>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
