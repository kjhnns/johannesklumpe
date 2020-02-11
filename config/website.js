module.exports = {
  pathPrefix: `/`,
  url: `https://www.johannesklumpe.com/`,
  title: `Personal Website of Johannes Klumpe`,
  titleTemplate: `%s — Johannes Klumpe`,
  description: `This is the personal website of Johannes Klumpe.`,
  image: `/images/meta-image-default.png`, // Path to the default meta image in `static` folder
  siteLanguage: `en`, // Language tag on <html> element

  // Web App Manifest
  favicon: `src/images/favicon.png`, // Used for manifest favicon generation
  shortName: `Johannes klumpe`, // shortname for manifest. *Must* be shorter than 12 characters
  themeColor: `#253688`,
  backgroundColor: `#253688`,

  // schema.org JSONLD
  headline: `This is the personal website of Johannes Klumpe.`,
  author: ``,

  // Google & Twitter
  googleAnalyticsId: `UA-XXXXX`, // Google Analytics ID
  twitter: `@kjhnns`, // Twitter username
}
