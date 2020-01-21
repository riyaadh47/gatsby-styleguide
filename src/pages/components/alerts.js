import React from 'react'

// Syntax Highlighting
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Componenets
import Alert from '../../components/alert'
import Layout from '../../components/layout'


export const frontmatter = {
	title: "Alerts",
  description: "Things about the choropleth.",
  type: "component"
}

const Alerts = () => {

const codeString = `<Alert content='Alert 2' state="" />
<Alert content='Alert 2' state="success" />
<Alert content='Alert 3' state="unsuccessful" />
`;

	return (

			<Layout>
				<section className="content-wrapper">
					<div className="page-name-container">
						<h1 className="page-name">{frontmatter.title}</h1>
						<p className="page-subtitle">{frontmatter.description}</p>
					</div>
					
					<section className="content">
						
						<Alert content='Alert  ' state="" />
						<Alert content='Alert 2' state="success" />
						<Alert content='Alert 3' state="unsuccessful" />


						<SyntaxHighlighter language="javascript" style={docco}>
				      {codeString}
				    </SyntaxHighlighter>


					</section>

				</section>
			</Layout>

		)
}

export default Alerts