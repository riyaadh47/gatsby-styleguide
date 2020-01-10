import React from 'react'
import Layout from '../../components/layout'


export const frontmatter = {
	title: "Buttons",
  description: "Things about the choropleth.",
  type: "component"
}

const Buttons = () => {

	return (

			<Layout>
				<section className="content-wrapper">
					<div className="page-name-container">
						<h1 className="page-name">{frontmatter.title}</h1>
						<p className="page-subtitle">{frontmatter.description}</p>
					</div>
				</section>
			</Layout>

		)
}

export default Buttons