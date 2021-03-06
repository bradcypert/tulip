module.exports = {
  siteMetadata: {
    title: `BradCypert.com | Programming Tutorials and Resources`,
    description: `Tutorials and resources for programming Android Apps, Web Servers and Web Clients. Languages include TypeScript, Kotlin, Dart, Go and many more!`,
    author: `@bradcypert`,
    siteUrl: "https://www.bradcypert.com",
    organization: {
      url: "https://www.bradcypert.com",
      name: "Brad Cypert",
      logo: "https://www.bradcypert.com/bradcypert-logo-transparent.png",
    }
  },
  flags: {
    DEV_SSR: false
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    "gatsby-remark-embed-video",
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-8945603214034079`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-79259938-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: true,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "bradcypert.com",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BradCypert.com`,
        short_name: `BradCypert.com`,
        start_url: `/`,
        background_color: `#456766`,
        theme_color: `#456766`,
        display: `minimal-ui`,
        icon: `static/bradcypert-logo-transparent.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-page-creator",
    //   options: {
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
    `gatsby-plugin-catch-links`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-embed-video",
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
        defaultLayouts: {
          posts: require.resolve("./src/components/blog-layout.tsx"),
          blog: require.resolve("./src/components/blog-layout.tsx"),
          default: require.resolve("./src/components/centered-layout.tsx"),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Sora',
          },
          {
            family: 'Source Serif Pro'
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
        javascriptEnabled: true,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
          postCssPlugins: [require("tailwindcss"), require("./tailwind.config.js"),],
          },
      },
    // {
    //   resolve: `gatsby-plugin-sass`,
    //   options: {
    //     postCssPlugins: [
    //       require("tailwindcss"),
    //       // require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
    //     ],
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
