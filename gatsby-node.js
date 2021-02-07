const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

function createBlogPosts(graphql, actions) {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/components/blog-layout.tsx`);
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {frontmatter: {status: {eq: "publish"}}}
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
              body
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });
  });
}

function createTagPages(graphql, actions) {
  const { createPage } = actions;
  const tagLayout = path.resolve(`./src/components/tag-page.tsx`);
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {frontmatter: {status: {eq: "publish"}}}
          limit: 1000
        ) {
          edges {
            node {
              id
              frontmatter {
                tag
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const edges = result.data.allMdx.edges;
    const tags = [
      ...new Set(
        edges
          .map(e => e.node.frontmatter.tag)
          .reduce((acc, cur) => acc.concat(...cur), [])
          .map(e => e.toLowerCase())
      ),
    ];

    tags.forEach((tag, index) => {
      createPage({
        path: "/tags/" + tag,
        component: tagLayout,
        context: {
          tag: `/^${tag}$/i`,
          cleanTag: tag,
        },
      });
    });
  });
}

function createBlogPage(graphql, actions) {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/components/blog-list.tsx`);
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {frontmatter: {status: {eq: "publish"}}}
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                date
              }
              body
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges;
    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: index === 0 ? "/blog" : `/blog/${index + 1}`,
        component: blogPost,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      });
    });
  });
}

exports.createPages = ({ graphql, actions }) => {
  return createBlogPosts(graphql, actions)
    .then(() => {
      return createTagPages(graphql, actions);
    })
    .then(() => {
      return createBlogPage(graphql, actions);
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
