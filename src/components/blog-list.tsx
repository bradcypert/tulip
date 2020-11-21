import React from "react"
import PropTypes from "prop-types"

import Layout from "./layout";
import "./layout.less"
import { Grid, Button } from "semantic-ui-react";

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
                    <Grid>
                        <Grid.Column width={1} />
                        <Grid.Column width={3}>
                            <LeftRail />
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <main className="blog-content">
                                <h1>The Archives</h1>
                                {props.data.allMdx.nodes.map(node => {
                                    return <ArticleCard node={node} />
                                })}
                                {props.pageContext.currentPage != 1 && props.pageContext.currentPage != null &&
                                    <Link to={`/blog/${props.pageContext.currentPage - 1}`}>
                                        <Button content='Previous' icon='left arrow' labelPosition='left' />
                                    </Link>
                                }
                                {props.pageContext.currentPage != props.pageContext.numPages &&
                                    <Link to={`/blog/${props.pageContext.currentPage + 1}`}>
                                        <Button content='Next' icon='right arrow' labelPosition='right' />
                                    </Link>
                                }
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
  query($skip: Int!, $limit: Int!) {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: $limit, skip: $skip) {
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
