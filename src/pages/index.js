import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import '../css/alerts.scss'
import buttons from '../css/buttons.module.scss'

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
						
						<p className='alert'>This is the latest version of {data.site.siteMetadata.title} style guide - an internal guide and code repository for design and front-end development. You can drag the url below to your bookmarks toolbar to create a shortcut.</p>

						<h4>Additional resources</h4>
						
						<p>The latest wireframes can be viewed at:</p>

						<p><a href="/example-page" className={buttons.link}>Mobile</a></p>

						<p><a href="/example-page" className={buttons.link}>Desktop</a></p>

					</div>

				</section>

			</Layout>
		)
}

export default IndexPage;