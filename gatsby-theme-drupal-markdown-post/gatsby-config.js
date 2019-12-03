module.exports = ({ basePath = "/" }) => ({
  plugins: [
    `gatsby-plugin-sharp`, 
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `@weknow/gatsby-remark-drupal`,
            options: {
              nodes: [`gatsby_md_post_markdown_post`]
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1080,
            },
          },
        ]
      }
    }
  ],
})