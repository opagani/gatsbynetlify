module.exports = {
  siteMetadata: {
    title: "Oscar Pagani Blog",
    desc: "A new blog"
  },
  pathPrefix: "/opagani-blog",
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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ]
};

