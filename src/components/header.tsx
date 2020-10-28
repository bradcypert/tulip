import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Dropdown, Icon } from 'rsuite';

const Header = ({ siteTitle }) => (
  <Navbar>
    <Navbar.Header>
    <Link
      to="/"
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
              color: `white`,
              textDecoration: `none`,
            }}
          ><Nav.Item eventKey="1" icon={<Icon icon="home" />}>
          Home
        </Nav.Item>
        </Link>
        <Nav.Item eventKey="2">News</Nav.Item>
        <Nav.Item eventKey="3">Products</Nav.Item>
        <Dropdown title="About">
          <Dropdown.Item eventKey="4">Company</Dropdown.Item>
          <Dropdown.Item eventKey="5">Team</Dropdown.Item>
          <Dropdown.Item eventKey="6">Contact</Dropdown.Item>
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
