require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    author: ``,
    siteUrl: `https://www.johannesklumpe.com/`,
    siteHeadline: `This is the personal website of Johannes Klumpe.`,
    titleTemplate: `%s — Johannes Klumpe`,
    siteImage: `/meta-image-default.png`,
    siteTitle: `Johannes Klumpe`,
    siteTitleAlt: `Personal Website of Johannes Klumpe`,
    siteDescription: `This is the personal website of Johannes Klumpe.`,
    siteLanguage: `en`,
  },
  plugins: [{
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [{
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [{
            name: `Twitter`,
            url: `https://twitter.com/kjhnns`,
          },
          {
            name: `Email`,
            url: `mailto:johannes.klumpe@gmail.com`,
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //   },
    // },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal Website of Johannes Klumpe`,
        short_name: `Johannes`,
        description: `This is the personal website of Johannes Klumpe.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3aafa9`,
        display: `standalone`,
        icon: `./static/favicon.png`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}