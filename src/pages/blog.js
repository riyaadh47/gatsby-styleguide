import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'


const BlogPage = () => {

	 	const data = useStaticQuery(graphql`
			query {
				allMarkdownRemark {
			    edges {
			      node {
			        frontmatter {
			          title
			          date
			        }
			        id
			      }
			    }
			  }
			}
		`)

	 	console.log(data);

		return (
			<Layout>
				
				<div>
					<ol>
						{data.allMarkdownRemark.edges.map( (post) => {
							return (
								<li key={post.node.id}>
									<h2>{post.node.frontmatter.title}</h2>
									<p>{post.node.frontmatter.date}</p>
									<p>{post.node.frontmatter.url}</p>
								</li>
							)
						})}
					</ol>
				</div>
				
			</Layout>
		)

	}



export default BlogPage;