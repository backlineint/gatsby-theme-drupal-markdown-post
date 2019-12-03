module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-drupal-markdown-post`,
      options: {
        basePath: `/posts`,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://brian-perry-interactive.lndo.site:8000/`,
      },
    }
  ],
}