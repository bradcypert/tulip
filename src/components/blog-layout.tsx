import React from "react"
import PropTypes from "prop-types"
import { FlexboxGrid, Panel } from "rsuite";

import Layout from "./layout";
import "./layout.less"
import FlexboxGridItem from "rsuite/lib/FlexboxGrid/FlexboxGridItem";
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
    const expDateStr = dateStr.split(".");
    date.setMonth(+expDateStr[0]);
    date.setDate(+expDateStr[1]);
    date.setFullYear(+expDateStr[2]);
    return (
        <>
            <Layout>
                <div style={{ margin: "15px 0" }}>
                    <FlexboxGrid>
                        <FlexboxGridItem colspan={2} />
                        <FlexboxGridItem colspan={4}>
                            <div>
                                <Panel bordered>
                                    <LearnSomething />
                                </Panel>
                            </div>
                        </FlexboxGridItem>
                        <FlexboxGridItem colspan={1} />
                        <FlexboxGridItem colspan={12}>
                            <main className="blog-content">
                                <h1>{data.mdx.frontmatter.title}</h1>
                                <h4>Posted: {formatter.format(date)}</h4>
                                {!!data.mdx.frontmatter.lastUpdated ? <h4>Last Updated: {data.mdx.frontmatter.date}</h4> : null}
                                <div className="mdx">
                                    <MdxBlock>{data.mdx.body}</MdxBlock>
                                </div>
                            </main>
                        </FlexboxGridItem>
                    </FlexboxGrid>
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
