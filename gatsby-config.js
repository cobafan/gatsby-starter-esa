module.exports = {
  siteMetadata: {
    title: 'Gatsby Esa Starter',
    author: 'mottox2',
    description: 'A starter blog pulling data from esa',
    siteUrl: 'https://gatsbyjs.github.io/gatsby-starter-blog/'
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [{
      resolve: `gatsby-source-esa`,
      options: {
        accessToken: process.env.ESA_TOKEN,
        teamName: 'mottox2',
        q: `in:public`
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
}