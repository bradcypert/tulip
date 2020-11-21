import React from "react"
import PropTypes from "prop-types"

import Layout from "./layout";
import "./layout.less"
import { Grid, Segment } from "semantic-ui-react";
import LearnSomething from "./learn-something";

import { MDXProvider } from "@mdx-js/react";
import CodeBlock from './code-block';
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";
import ArticleCard from "./article-card";

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
                    <Grid>
                        <Grid.Column width={1} />
                        <Grid.Column width={3}>
                            <div>
                                <LearnSomething />
                            </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <main className="blog-content">
                                <h1>Tag: {props.pageContext.cleanTag}</h1>
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
