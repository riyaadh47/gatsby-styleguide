import React from 'react'

import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'

import cardStyles from '../css/cards.module.scss'


const Card = (props) => {


const data = useStaticQuery(graphql`
  query Images {
    image: file(relativePath: {eq: "images/monochrome.jpg"}) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);
	
	const {title, content} = props;
	
	return (

		<div className={cardStyles.card}>
			<h1 className={cardStyles.heading}>{title}</h1>
			<div className={cardStyles.content}>
				<p>{content}</p>
			</div>
			<Img fluid={data.image.childImageSharp.fluid} />
		</div>

	)

}

export default Card