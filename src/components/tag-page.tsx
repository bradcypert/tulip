import React from "react"
import PropTypes from "prop-types"

import Layout from "./layout";
import "./layout.css"

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
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="md:col-start-2 md:col-span-2 p-2">
                            <LeftRail />
                        </div>
                        <div className="md:col-start-4 md:col-span-7 p-2">
                            <main className="blog-content">
                                <h1 className="text-4xl">
                                    Tag: {props.pageContext.cleanTag}
                                </h1>
                                {props.data.allMdx.nodes.map(node => {
                                    return <ArticleCard node={node} />
                                })}
                            </main>
                        </div>
                    </div>
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
