/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import SchemaOrg from "./schema-org";

const SEO = ({ post, frontmatter, postImage, isBlogPost, slug }) => (
  <StaticQuery
    query={graphql`
      {
        placeholderImage: file(relativePath: { eq: "brad_400x400.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
            organization {
              url
              name
              logo
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo }, placeholderImage: {childImageSharp: imageSharp} }) => {
      const postMeta =
        frontmatter || post.frontmatter || {};

      const title = `${postMeta.title ? `${postMeta.title} | ` : ""}${seo.title}`;
      const description = postMeta.description || seo.description;
      const image = postImage ? `${seo.siteUrl}${postImage.src}` : seo.siteUrl + imageSharp.fluid.src;
      const url = slug ? `${seo.siteUrl}${slug}` : seo.siteUrl;
      const datePublished = isBlogPost ? postMeta.datePublished : false;

      return (
        <React.Fragment>
          <Helmet>
            {/* General tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            <link rel="canonical" href={url} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            {isBlogPost ? <meta property="og:type" content="article" /> : null}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@bradcypert" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
          </Helmet>
          <SchemaOrg
            isBlogPost={isBlogPost}
            url={url}
            title={title}
            image={image}
            description={description}
            datePublished={datePublished}
            siteUrl={seo.siteUrl}
            author={seo.author}
            organization={seo.organization}
            defaultTitle={seo.title}
          />
        </React.Fragment>
      );
    }}
  />
);

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  post: PropTypes.shape({
    frontMatter: PropTypes.any,
  }),
  postImage: PropTypes.string,
};

SEO.defaultProps = {
  isBlogPost: false,
  post: { frontmatter: {} },
  postImage: null,
};

export default SEO;
