import React from "react"
import PropTypes from "prop-types"
import Segment from "./segment";
import Layout from "./layout";
import "./layout.css"

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

const BlogLayout = ({ data, path }) => {
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
                <SEO post={data.mdx} slug={path} postImage={featuredImgFluid} isBlogPost />
                <div style={{ margin: "15px 0" }}>
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="md:col-start-2 md:col-span-2 p-2">
                            <LeftRail />
                        </div>
                        <div className="md:col-start-4 md:col-span-7 p-2">
                            <main className="blog-content">
                                <Segment>
                                    <h1 className="text-4xl">{data.mdx.frontmatter.title}</h1>
                                    <h4 className="text-3xl" style={{ marginBottom: "1rem" }}>Posted: {formatter.format(date)}</h4>
                                    <h5 className="text-2xl">Tagged under: {data.mdx.frontmatter.tag.map((tag: String) =>
                                        <Link style={{ marginRight: "4px" }} to={`/tags/${tag}`}>
                                            {tag}
                                        </Link>
                                    )}
                                    </h5>
                                    {!!data.mdx.frontmatter.lastUpdated ? <h4>Last Updated: {data.mdx.frontmatter.date}</h4> : null}
                                    {featuredImgFluid && <Img loading="eager" fadeIn={false} alt={data.mdx.frontmatter.title} style={{borderRadius: '4px'}} fluid={featuredImgFluid} />}
                                    <div className="mdx">
                                        <MdxBlock>{data.mdx.body}</MdxBlock>
                                    </div>
                                    <h4 style={{marginLeft: "0.5em"}}>Comments</h4>
                                    <script src="https://utteranc.es/client.js"
                                        repo="bradcypert/tulip"
                                        issue-term="pathname"
                                        label="blog_comments"
                                        theme="preferred-color-scheme"
                                        crossorigin="anonymous"
                                        async>
                                    </script>
                                </Segment>
                            </main>
                        </div>
                    </div>
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
