import React from "react"
import PropTypes from "prop-types"
import { Segment, Grid } from 'semantic-ui-react';

import Layout from "./layout";
import "./layout.less"
import LearnSomething from "./learn-something";

import { MDXProvider } from "@mdx-js/react";
import CodeBlock from './code-block';
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";

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

const BlogLayout = ({ data }) => {

    const date = new Date();
    const dateStr = data.mdx.frontmatter.date;
    const expDateStr = dateStr.split("/");
    date.setMonth(+expDateStr[1]);
    date.setDate(+expDateStr[2]);
    date.setFullYear(+expDateStr[0]);
    return (
        <>
            <Layout>
                <div style={{ margin: "15px 0" }}>
                    <Grid>
                        <Grid.Column mobile={1} computer={1}>
                        </Grid.Column>
                        <Grid.Column mobile={14} computer={3}>
                            <div>
                                <Segment>
                                    <LearnSomething />
                                </Segment>
                            </div>
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={10}>
                            <main className="blog-content">
                                <h1>{data.mdx.frontmatter.title}</h1>
                                <h4>Posted: {formatter.format(date)}</h4>
                                {!!data.mdx.frontmatter.lastUpdated ? <h4>Last Updated: {data.mdx.frontmatter.date}</h4> : null}
                                <div className="mdx">
                                    <MdxBlock>{data.mdx.body}</MdxBlock>
                                </div>
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
      }
      body
    }
  }
`
