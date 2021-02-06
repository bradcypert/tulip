import React from "react"
import PropTypes from "prop-types"

import Layout from "./layout";
import "./layout.less"
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";

import { MDXProvider } from "@mdx-js/react";
import CodeBlock from './code-block';
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";
import ArticleCard from "./article-card";
import LeftRail from "./left-rail";

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

const TagPage = (props) => {
    return (
        <>
            <Layout>
                <div style={{ margin: "15px 0" }}>
                    <Grid reversed='mobile vertically'>
                        <Grid.Column mobile={1} computer={1}>
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={3}>
                            <LeftRail />
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={10}>
                            <main className="blog-content">
                                <h1 className="text-4xl">
                                    Tag: {props.pageContext.cleanTag}
                                </h1>
                                {props.data.allMdx.nodes.map(node => {
                                    return <ArticleCard node={node} />
                                })}
                            </main>
                        </Grid.Column>
                    </Grid>
                </div>
            </Layout>
        </>
    )
}

TagPage.propTypes = {
    children: PropTypes.node.isRequired,
}

export default TagPage

export const query = graphql`
  query($tag: String!) {
    allMdx(filter: {frontmatter: {tag: {regex: $tag}}}, sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        slug
          excerpt(pruneLength: 500)
          frontmatter {
            tag
            title
            date
          }
      }
    }
  }  
`
