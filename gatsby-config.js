const path = require(`path`)

module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-drupal',
      options: {
        // baseUrl: 'http://backend.heartdriven.com/',
        baseUrl: 'http://heart-driven-backend.lndo.site/',
        apiBase: 'jsonapi',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}