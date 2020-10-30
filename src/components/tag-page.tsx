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
import { graphql, Link } from "gatsby";

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
    console.log(props);
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
                                <h1>Tag: {props.pageContext.cleanTag}</h1>
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
                            </main>
                        </FlexboxGridItem>
                    </FlexboxGrid>
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
    allMdx(filter: {frontmatter: {tag: {regex: $tag}}}, sort: {fields: frontmatter___date}) {
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
