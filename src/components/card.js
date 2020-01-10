import React from 'react'

import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'

import '../css/style.scss'


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
	
	const {title, content, alignment} = props;
	
	return (

		<div className={`card ${alignment}`}>
			<h1 className="heading">{title}</h1>
			<div className="content">
				<p>{content}</p>
			</div>
			<Img fluid={data.image.childImageSharp.fluid} />
		</div>

	)

}

export default Card