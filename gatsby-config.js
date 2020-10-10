module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
    creator: "Hajime",
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
