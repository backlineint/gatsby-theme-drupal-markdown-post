# Gatsby Theme Drupal Markdown Post

Single purpose theme that displays Markdown post data from Drupal in Gatsby with limited 
configuration. Uses the [gatsby-remark-drupal](https://www.gatsbyjs.org/packages/@weknow/gatsby-remark-drupal/) plugin for markdown and image preprocessing.

Requires enabling the [Gatsby Markdown Post](https://drupal.org/projects/gatsby_markdown_post) module on your Drupal site.

## Install

`npm install --save @backlineint/gatsby-theme-drupal-markdown-post gatsby-source-drupal`

This theme has [gatsby-source-drupal](https://www.gatsbyjs.org/packages/gatsby-source-drupal/) as a peer dependency - if you aren't already using that
plugin you'll need to install and configure it.

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-drupal-markdown-post`,
      options: {
        basePath: `/posts`, // Optional, defaults to `/`
      },
    },
    {
      resolve: `gatsby-source-drupal`, // Configure gatsby-source-drupal as needed
      options: {
        baseUrl: `https://live-contentacms.pantheonsite.io/`,
      },
    }
  ],
}
```

## Theming and Component Shadowing

This theme intentionally does not include styling so that it can be easily overridden and used with any prefered styling approach. You may find it helpful to shadow some or all of the following components provided by this theme:

* DrupalMarkdownPost
* DrupalMarkdownPostList
* Layout