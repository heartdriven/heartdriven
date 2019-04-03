const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Heart Driven`,
    description:
      `My personal blog and company website.`,
    url: `https://heartdriven.com`,
    twitterUsername: `@heartdriven`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://backend.heartdriven.com/',
        //baseUrl: 'http://heart-driven-backend.lndo.site/',
        apiBase: 'jsonapi',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
        path: `${__dirname}/src/images`
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `@weknow/gatsby-remark-drupal`,
            options: {
              nodes: [`project`]
            }
          }
        ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}