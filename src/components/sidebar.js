import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import sidebarStyles from '../css/sidebar.module.scss'

const Sidebar = () => {

	const data = useStaticQuery(graphql`
									
		query {
			allJavascriptFrontmatter {
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

		<aside className={sidebarStyles.sidebar}>
			<header className={sidebarStyles.header}>
				<span className={sidebarStyles.title}><Link to="/">{data.site.siteMetadata.title}</Link></span>
			</header>
			<ul className={sidebarStyles.navigation}>
				{data.allJavascriptFrontmatter.edges.map( (edge) => {
					if (edge.node.frontmatter.type === "component") {
						return (
							<li key={edge.node.id}>
								<Link to={`components/${edge.node.frontmatter.title.toLowerCase()}`} className={sidebarStyles.link}>{edge.node.frontmatter.title}</Link>
							</li>
						)
					} else {
						return (
							<></>
						)
					}
					})}
			</ul>
		</aside>

	)

}

export default Sidebar