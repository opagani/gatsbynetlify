module.exports = {
  siteMetadata: {
    title: "Oscar Pagani Blog",
    desc: "A new blog"
  },  
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator:  `<!-- end -->`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        host: process.env.GATSBY_CONTENTFUL_HOST
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ]
};
// pathPrefix: "/opagani-blog",

