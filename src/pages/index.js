import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/simple-image";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Popup from "semantic-ui-react/dist/commonjs/modules/Popup";

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
    <>
    <SEO postImage={data.placeholderImage.childImageSharp.fluid.src} />
    <div className="fancy-background-1">
      <Layout>
        <Grid
          centered
          verticalAlign="middle"
          columns={16}
          style={{ minHeight: "95vh" }}
        >
          <Grid.Column mobile={16} computer={8}>
            <Image
              style={{ display: "block", margin: "0 auto" }}
              width="36"
              height="36"
              circular
              alt="Brad Cypert"
              src={data.placeholderImage.childImageSharp.fluid.src}
            ></Image>
            <h1 className="text-4xl m-4">👋 I'm Brad Cypert and this is BradCypert.com.</h1>
            <h2 className="text-2xl m-3">Here you'll learn about a vast array of programming languages, frameworks, and technologies.</h2>
            <h3 className="text-xl m-3">
              Who am I?<br/>I'm a programming language enthusiast. Sometimes I{" "}
              <Link to="/blog">write</Link>. Sometimes I post content on{" "}
              <a href="https://www.youtube.com/bradcypert">Youtube</a>.
            </h3>
            <h4 className="text-xl">
              I also run{" "}
              <Popup
                content="Pyre Studios LLC is a small, independent multimedia studio in Louisville, Kentucky."
                trigger={
                  <a href="https://pyrestudios.io" target="_blank" rel="noopener">
                    Pyre Studios LLC
                  </a>
                }
              />
              , which has built apps such as{" "}
              <Popup
                content="Luna Journal is a mobile and web app built to help track your pet's health and adventures, with the optional ability to forward entries to your pet's veterinary."
                trigger={
                  <a href="https://www.lunajournal.app" target="_blank" rel="noopener">
                    Luna Journal
                  </a>
                }
              />{" "}
              and{" "}
              <Popup
                content="Bluejay.app helps aspiring writers succeed at writing their first book."
                trigger={
                  <a href="https://www.bluejay.app" target="_blank" rel="noopener">
                    Bluejay.app
                  </a>
                }
              />
            </h4>
          </Grid.Column>
        </Grid>
      </Layout>
    </div>
    </>
  );
};

export default IndexPage;
