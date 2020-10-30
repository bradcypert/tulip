import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Dropdown, Icon } from 'rsuite';

const Header = ({ siteTitle }) => (
  <Navbar>
    <Navbar.Body>
      <Nav>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        ><Nav.Item eventKey="1" icon={<Icon icon="home" />}>
            BradCypert.com
        </Nav.Item>
        </Link>
        <Dropdown title="Language Specific Resources">
          <Link to="/clojure-resources">
            <Dropdown.Item eventKey="2">Clojure</Dropdown.Item>
          </Link>
          <Link to="/dart-resources">
            <Dropdown.Item eventKey="3">Dart</Dropdown.Item>
          </Link>
          <Link to="/golang-resources">
            <Dropdown.Item eventKey="5">Golang</Dropdown.Item>
          </Link>
          <Link to="/java-resources">
            <Dropdown.Item eventKey="6">Java</Dropdown.Item>
          </Link>
          <Link to="/javascript-resources">
            <Dropdown.Item eventKey="7">JavaScript / TypeScript</Dropdown.Item>
          </Link>
          <Link to="/kotlin-resources">
            <Dropdown.Item eventKey="8">Kotlin</Dropdown.Item>
          </Link>
          <Link to="/php-resources">
            <Dropdown.Item eventKey="9">PHP</Dropdown.Item>
          </Link>
          <Link to="/python-resources">
            <Dropdown.Item eventKey="10">Python</Dropdown.Item>
          </Link>
          <Link to="/scala-resources">
            <Dropdown.Item eventKey="11">Scala</Dropdown.Item>
          </Link>
        </Dropdown>
        <Dropdown title="Apps">
          <Dropdown.Menu title="Image2Text">
            <a href="https://play.google.com/store/apps/details?id=com.bradcypert.image2text" target="_blank">
              <Dropdown.Item eventKey="12">On the Play Store</Dropdown.Item>
            </a>
            <Link to="/image2text-privacy-policy">
              <Dropdown.Item eventKey="13">Privacy Policy</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown title="About">
          <Link to="/contact">
            <Dropdown.Item eventKey="14">Contact</Dropdown.Item>
          </Link>
          <Link to="/resume">
            <Dropdown.Item eventKey="15">Resume</Dropdown.Item>
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
