import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Scrollbars } from 'react-custom-scrollbars';

const Sidebar = () => {

	const data = useStaticQuery(graphql`
									
		query {
			allJavascriptFrontmatter(sort: {fields: frontmatter___title}) {
		    edges {
		      node {
		        frontmatter {
		          type
		          title
		        }
		        id
		      }
		    }
		  }

		  site {
		    siteMetadata {
		      title
		    }
		  }
		  
		}

	`);

	return (

		<aside className="sidebar">
			<header className="header">
				<span className="title">{data.site.siteMetadata.title}</span>
			</header>
			<Scrollbars autoHide autoHeight >
				<ul className="navigation">
					{data.allJavascriptFrontmatter.edges.map( (edge) => {
						if (edge.node.frontmatter.type === "component") {
							return (
								<li key={edge.node.id}>
									<Link to={`components/${edge.node.frontmatter.title.toLowerCase()}`} className="link">{edge.node.frontmatter.title}</Link>
								</li>
							)
						} else {
							return (
								<></>
							)
						}
						})}
				</ul>
			</Scrollbars>
		</aside>

	)

}

export default Sidebar