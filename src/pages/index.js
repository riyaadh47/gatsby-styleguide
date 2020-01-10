import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'









const IndexPage = () => {

	const data = useStaticQuery(graphql`
	  query {
		  site {
		    siteMetadata {
		      title
		    }
		  }
	  }

	`);

	return (
			<Layout>

				<section className="content-wrapper">

					<div className="page-name-container">
						<h1 className="page-name">{data.site.siteMetadata.title}</h1>
						<p className="page-subtitle">This is the latest version of the My10X style guide - an internal guide and code repository for design and front-end development. You can drag the url below to your bookmarks toolbar to create a shortcut</p>
					</div>
				</section>

			</Layout>
		)
}

export default IndexPage;