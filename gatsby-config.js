module.exports = {
  siteMetadata: {
    title: `Alpha Olomi // Software Developer`,
    description: `Alpha Olomi is a Software Developer with over 3 years of experiences in a wide range of disciplines. Constantly in back-end development, learning and experiencing new things.`,
    author: `@alphaolomi`,
    keywords: ['Alpha Olomi', 'Alpha Elifuraha Olomi', 'personal', 'portfolio', 'experience', 'freelance', 'student', 'engineer', 'software', 'developer'],
    contact: 'hello@alphaolomi.com',
    image: 'http://alphaolomi.com/img/thumbnail.png',
    site_name: 'Alpha Olomi // Software Developer',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alphaolomi`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, 
      },
    },
  ],
}
