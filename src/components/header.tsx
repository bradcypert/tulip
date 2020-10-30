import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Dropdown, Icon } from 'rsuite';

const Header = ({ siteTitle }) => (
  <Navbar>
    <Navbar.Header>
      <Link
        to="/"
        className="navbar-brand logo"
        style={{
          textDecoration: `none`,
        }}
      >BradCypert.com
    </Link>
    </Navbar.Header>
    <Navbar.Body>
      <Nav>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        ><Nav.Item eventKey="1" icon={<Icon icon="home" />}>
            Home
        </Nav.Item>
        </Link>
        <Dropdown title="Language Specific Resources">
          <Dropdown.Item eventKey="2">Clojure</Dropdown.Item>
          <Dropdown.Item eventKey="3">Dart</Dropdown.Item>
          <Dropdown.Item eventKey="5">Golang</Dropdown.Item>
          <Dropdown.Item eventKey="6">Java</Dropdown.Item>
          <Dropdown.Item eventKey="7">JavaScript</Dropdown.Item>
          <Dropdown.Item eventKey="8">Kotlin</Dropdown.Item>
          <Dropdown.Item eventKey="9">PHP</Dropdown.Item>
          <Dropdown.Item eventKey="10">Python</Dropdown.Item>
          <Dropdown.Item eventKey="11">Scala</Dropdown.Item>
          <Dropdown.Item eventKey="12">TypeScript</Dropdown.Item>
        </Dropdown>
        <Dropdown title="Apps">
          <Dropdown.Menu title="Image2Text">
            <a href="https://play.google.com/store/apps/details?id=com.bradcypert.image2text" target="_blank">
              <Dropdown.Item eventKey="13">On the Play Store</Dropdown.Item>
            </a>
            <Link to="/image2text-privacy-policy">
              <Dropdown.Item eventKey="14">Privacy Policy</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown title="About">
          <Dropdown.Item eventKey="15">Contact</Dropdown.Item>
          <Dropdown.Item eventKey="16">Resume</Dropdown.Item>
        </Dropdown>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
      </Nav>
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
