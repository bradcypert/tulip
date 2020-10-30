/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Content, Footer, FlexboxGrid } from "rsuite";
import Header from "./header"
import "./layout.less"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>
        <Content>
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={2} />
            <FlexboxGrid.Item colspan={22}>
              {children}
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
