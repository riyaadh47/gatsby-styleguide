import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import '../css/style.scss'

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

						<h4>Additional resources</h4>
						
						<p>The latest wireframes can be viewed at:</p>

						<p><a href="/example-page" className="link">Mobile</a></p>

						<p><a href="/example-page" className="link">Desktop</a></p>

					</div>

				</section>

			</Layout>
		)
}

export default IndexPage;