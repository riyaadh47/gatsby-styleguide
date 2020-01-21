import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Scrollbars } from 'react-custom-scrollbars';

import sidebarStyles from '../css/sidebar.module.scss'

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

		<aside className={sidebarStyles.sidebar}>
			<header className={sidebarStyles.header}>
				<span className={sidebarStyles.title}>{data.site.siteMetadata.title}</span>
			</header>
			<Scrollbars autoHide style={{ height: '91%' }}>
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
			</Scrollbars>
		</aside>

	)

}

export default Sidebar