import React from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FlexboxGrid, Avatar, Whisper, Tooltip } from "rsuite";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "brad_400x400.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return(
  <Layout>
    <SEO title="Home" />
    <FlexboxGrid align="middle" className="fancy-background-1" style={{minHeight: "100vh"}}>
      <FlexboxGrid.Item colspan="24">
        <Avatar style={{display: "block", margin: "0 auto"}} size="xl" circle src={data.placeholderImage.childImageSharp.fluid.src}></Avatar>
        <h1>I'm Brad Cypert.</h1>
        <h3>I code a lot. Sometimes I write. Sometimes I post content on <a href="https://www.youtube.com/bradcypert">Youtube</a>.</h3>
        <h4>I run <Whisper trigger="hover" speaker={
          <Tooltip>
            Pyre Studios is a small, independent multimedia studio ran out of Louisville, KY.
          </Tooltip>}>
          <a href="https://pyrestudios.io" target="_blank">Pyre Studios LLC</a>
        </Whisper>, which has built apps such as <Whisper trigger="hover" speaker={
          <Tooltip>
            Luna Journal is a mobile and web app designed to help track the important details in your pet's life and share those details with those who matter (including the Vet).
          </Tooltip>}><a href="https://www.lunajournal.app" target="_blank">Luna Journal</a></Whisper> and <Whisper trigger="hover" speaker={
          <Tooltip>
            Bluejay is a web app designed to help aspiring writers put their best foot forward with their first book.
          </Tooltip>}><a href="https://www.bluejay.app" target="_blank">Bluejay.app</a></Whisper></h4>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  </Layout>
  );
}

export default IndexPage
