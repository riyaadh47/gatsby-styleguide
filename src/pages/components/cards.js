import React from 'react'

import Layout from '../../components/layout'
import Card from '../../components/card'

export const frontmatter = {
	title: "Cards",
  description: "Things about the choropleth.",
  type: "component"
}


const Cards = () => {

	return (

			<Layout>

				<section className="content-wrapper">
					<div className="page-name-container">
						<h1 className="page-name">{frontmatter.title}</h1>
						<p className="page-subtitle">{frontmatter.title}</p>
					</div>
					<div className="components-wrapper">
						<Card alignment="" title="Heading of card" content={frontmatter.description}/>
					</div>
				</section>

			</Layout>

		)
}

export default Cards