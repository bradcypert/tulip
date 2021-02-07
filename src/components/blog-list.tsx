import React from "react"
import PropTypes from "prop-types"

import Layout from "./layout";
import "./layout.less"
import Button from "./button";

import { MDXProvider } from "@mdx-js/react";
import CodeBlock from './code-block';
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";
import LeftRail from "./left-rail";
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
                                <h1 className="text-4xl">The Archives</h1>
                                {props.data.allMdx.nodes.map(node => {
                                    return <ArticleCard node={node} />
                                })}
                                {props.pageContext.currentPage != 1 && props.pageContext.currentPage != null &&
                                    <Link className="no-bg" to={`/blog/${props.pageContext.currentPage - 1}`}>
                                        <Button color="orange">
                                            Previous
                                        </Button>
                                    </Link>
                                }
                                {props.pageContext.currentPage != props.pageContext.numPages &&
                                    <Link className="no-bg" to={`/blog/${props.pageContext.currentPage + 1}`}>
                                        <Button color="green">
                                            Next
                                        </Button>
                                    </Link>
                                }
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
  query($skip: Int!, $limit: Int!) {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {status: {eq: "publish"}}}, limit: $limit, skip: $skip) {
      nodes {
        id
        slug
          excerpt(pruneLength: 500)
          frontmatter {
            tag
            title
            date
            thumbnail {
                childImageSharp {
                  fluid(maxHeight: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
          }
      }
    }
  }  
`
