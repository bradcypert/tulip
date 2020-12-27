import React from "react"
import PropTypes from "prop-types"
import { Segment, Grid } from 'semantic-ui-react';

import Layout from "./layout";
import "./layout.less"

import { MDXProvider } from "@mdx-js/react";
import CodeBlock from './code-block';
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";
import LeftRail from "./left-rail";
import SEO from "./seo";
import Img from "gatsby-image";

const components = {
    pre: CodeBlock
};

const MdxBlock: React.FunctionComponent<any> = ({ children }) => {
    return (
        <MDXProvider components={components}>
            <MDXRenderer>{children}</MDXRenderer>
        </MDXProvider>
    )
}
const formatter = new Intl.DateTimeFormat('en-US');

const BlogLayout = ({data, path}) => {
    const date = new Date();
    const dateStr = data.mdx.frontmatter.date;
    const expDateStr = dateStr.split("/");
    date.setMonth(+expDateStr[1] - 1);
    date.setDate(+expDateStr[2]);
    date.setFullYear(+expDateStr[0]);
    let featuredImgFluid = data.mdx.frontmatter.thumbnail?.childImageSharp?.fluid;
    return (
        <>
            <Layout>
                <SEO post={data.mdx} slug={path} />
                <div style={{ margin: "15px 0" }}>
                    <Grid reversed='mobile vertically'>
                        <Grid.Column mobile={1} computer={1}>
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={3}>
                            <LeftRail />
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={10}>
                            <main className="blog-content">
                                <Segment inverted>
                                    <Img alt={data.mdx.frontmatter.title} fluid={featuredImgFluid} />
                                    <h1>{data.mdx.frontmatter.title}</h1>
                                    <h4 style={{ marginBottom: "1rem" }}>Posted: {formatter.format(date)}</h4>
                                    <h5>Tagged under: {data.mdx.frontmatter.tag.map(tag =>
                                        <Link style={{ marginRight: "4px" }} to={`/tags/${tag}`}>
                                            {tag}
                                        </Link>
                                    )}
                                    </h5>
                                    {!!data.mdx.frontmatter.lastUpdated ? <h4>Last Updated: {data.mdx.frontmatter.date}</h4> : null}
                                    <div className="mdx">
                                        <MdxBlock>{data.mdx.body}</MdxBlock>
                                    </div>
                                </Segment>
                            </main>
                        </Grid.Column>
                    </Grid>
                </div>
            </Layout>
        </>
    )
}

BlogLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BlogLayout

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date
        description
        excerpt
        tag
        thumbnail {
          childImageSharp {
            fluid(maxHeight: 800) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`
