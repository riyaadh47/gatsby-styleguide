const path = require(`path`)

module.exports = {

	siteMetadata: {
		title: "Style Guide",
    author: "Ri"
	},

  plugins : [
    {
    	resolve: 'gatsby-plugin-sass',
      options: {
        useResolveUrlLoader: true,
      }
    },

  	{
  		resolve: 'gatsby-source-filesystem',
  		options: {
  			name: 'src',
  			path: `${__dirname}/src/`
  		}
  	},

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

  	'gatsby-transformer-remark',
    "gatsby-transformer-javascript-frontmatter",
    
  ]
}