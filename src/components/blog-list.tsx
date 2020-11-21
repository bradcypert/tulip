import React from "react"
import PropTypes from "prop-types"

import Layout from "./layout";
import "./layout.less"
import { Grid, Segment, Button } from "semantic-ui-react";
import LearnSomething from "./learn-something";

import { MDXProvider } from "@mdx-js/react";
import CodeBlock from './code-block';
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";
import SendFoxForm from "./sendfox-form";

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
                                <Segment inverted>
                                    <h4>Never miss a beat</h4>
                                    <h5>Join my newsletter.</h5>
                                    <SendFoxForm form="javascript" />
                                </Segment>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <main className="blog-content">
                                <h1>The Archives</h1>
                                {props.data.allMdx.nodes.map(node => {
                                    const date = new Date();
                                    const dateStr = node.frontmatter.date;
                                    const expDateStr = dateStr.split("/");
                                    date.setMonth(+expDateStr[1]);
                                    date.setDate(+expDateStr[2]);
                                    date.setFullYear(+expDateStr[0]);

                                    return <article className="tag-block">
                                        <Link to={`/${node.slug}`}>
                                            <h3>{node.frontmatter.title}</h3>
                                        </Link>
                                        <h4>Published: {formatter.format(date)}</h4>
                                        <p>{node.excerpt}</p>
                                    </article>
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
