const config = require("./config")

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Starter for Wordpress Theme running WPGraphQL`,
    Author: `popopshuv.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WPGraphQL',
        fieldName: 'wpgraphql',
        url: `${config.wordPressUrl}/graphql`,
        refetchInterval: 60
      }
    }
  ]
};
