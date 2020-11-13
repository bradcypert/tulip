import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Image, Grid } from "semantic-ui-react";

const IndexPage = () => {
  const [isWindow, setIsWindow] = React.useState(false);
  React.useEffect(() => {
    setIsWindow(true);
  }, []);
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

  return (
    <div className="fancy-background-1">
      <Layout>
        <SEO title="Home" />
        <Grid
          centered
          verticalAlign="middle"
          columns={16}
          style={{ minHeight: "95vh" }}
        >
          <Grid.Column width={16}>
            <Image
              style={{ display: "block", margin: "0 auto" }}
              size="small"
              circular
              src={data.placeholderImage.childImageSharp.fluid.src}
            ></Image>
            <h1>👋 I'm Brad Cypert.</h1>
            <h3>
              I code a lot. Sometimes I write. Sometimes I post content on{" "}
              <a href="https://www.youtube.com/bradcypert">Youtube</a>.
            </h3>
            <h4>
              I run{" "}
              <a href="https://pyrestudios.io" target="_blank">
                Pyre Studios LLC
              </a>
              , which has built apps such as{" "}
              <a href="https://www.lunajournal.app" target="_blank">
                Luna Journal
              </a>{" "}
              and{" "}
              <a href="https://www.bluejay.app" target="_blank">
                Bluejay.app
              </a>
            </h4>
          </Grid.Column>
        </Grid>
      </Layout>
    </div>
  );
};

export default IndexPage;
