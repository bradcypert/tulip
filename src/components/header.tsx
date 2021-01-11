import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";

const Header = ({ siteTitle }) => (
  <Grid>
    <Grid.Column width={1} />
    <Grid.Column width={14}>
      <Menu stackable inverted fluid widths={5} style={{ marginTop: "1em" }}>
        <Menu.Item>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}>
            <div className="navbar-brand">
              BradCypert.com
            </div>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Dropdown key="1" text="Language Specific Resources">
            <Dropdown.Menu>
              <Link to="/clojure-resources">
                <Dropdown.Item>Clojure</Dropdown.Item>
              </Link>
              <Link to="/dart-resources">
                <Dropdown.Item>Dart & Flutter</Dropdown.Item>
              </Link>
              {/* <Link to="/go-resources">
                <Dropdown.Item>Golang</Dropdown.Item>
              </Link> */}
              <Link to="/java-resources">
                <Dropdown.Item>Java</Dropdown.Item>
              </Link>
              <Link to="/javascript-resources">
                <Dropdown.Item>JavaScript / TypeScript</Dropdown.Item>
              </Link>
              <Link to="/kotlin-resources">
                <Dropdown.Item>Kotlin & Android</Dropdown.Item>
              </Link>
              <Link to="/php-resources">
                <Dropdown.Item>PHP</Dropdown.Item>
              </Link>
              <Link to="/scala-resources">
                <Dropdown.Item>Scala</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog">
            Blog
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Dropdown key="2" text="Apps">
            <Dropdown.Menu>
              <Dropdown.Item>
                <Dropdown text="Image2Text">
                  <Dropdown.Menu>
                    <a href="https://play.google.com/store/apps/details?id=com.bradcypert.image2text" rel="noreferrer" target="_blank">
                      <Dropdown.Item>On the Play Store</Dropdown.Item>
                    </a>
                    <Link to="/image2text-privacy-policy">
                      <Dropdown.Item>Privacy Policy</Dropdown.Item>
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <Dropdown key="3" text="About">
            <Dropdown.Menu>
              <Link to="/contact">
                <Dropdown.Item>Contact</Dropdown.Item>
              </Link>
              <Link to="/resume">
                <Dropdown.Item>Resume</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Grid.Column>
  </Grid>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
