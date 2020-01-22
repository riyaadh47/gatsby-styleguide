import React from 'react'
import Layout from '../../components/layout'
import Button from '../../components/button'

// Syntax Highlighting
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';



export const frontmatter = {
	title: "Buttons",
  description: "Some description about the Buttons.",
  type: "component"
}

const outlineButtons = `<Button name="Default Button" buttonColor="" />
<Button name="Blue Button" buttonColor="blue-outline-button" />
<Button name="Green Button" buttonColor="green-outline-button" />
<Button name="Orange Button" buttonColor="orange-outline-button" />
`;

const solidButtons = `<Button name="Default Button" buttonColor="" />
<Button name="Blue Button" buttonColor="blue-solid-button" />
<Button name="Green Button" buttonColor="green-solid-button" />
<Button name="Orange Button" buttonColor="orange-solid-button" />
`;

const Buttons = () => {

	return (

			<Layout>
				<section className="content-wrapper">
					<div className="page-name-container">
						<h1 className="page-name">{frontmatter.title}</h1>
						<p className="page-subtitle">{frontmatter.description}</p>
					</div>

					<section className="content">

						<div className="styleguide-outline-button-container">
							<h2>Outline Buttons</h2>
							<section style={{display: "flex"}}>
								<div style={{marginRight: "1em"}}>
									<Button name="Default Button" buttonColor="" />
									<Button name="Blue Button" buttonColor="blue-outline-button" />
									<Button name="Green Button" buttonColor="green-outline-button" />
									<Button name="Orange Button" buttonColor="orange-outline-button" />
								</div>
								<div style={{marginRight: "1em"}}>
									<Button name="Default Button" buttonColor="" size="medium" />
									<Button name="Blue Button" buttonColor="blue-outline-button" size="medium" />
									<Button name="Green Button" buttonColor="green-outline-button" size="medium" />
									<Button name="Orange Button" buttonColor="orange-outline-button" size="medium" />
								</div>
								<div>
									<Button name="Default Button" buttonColor="" size="large" />
									<Button name="Blue Button" buttonColor="blue-outline-button" size="large" />
									<Button name="Green Button" buttonColor="green-outline-button" size="large" />
									<Button name="Orange Button" buttonColor="orange-outline-button" size="large" />
								</div>
							</section>
						</div>

						<SyntaxHighlighter language="javascript" style={docco}>
				      {outlineButtons}
				    </SyntaxHighlighter>

				    <hr style={{marginBottom: "50px"}}/>



						<div className="styleguide-solid-button-container">
							<h2>Solid Buttons</h2>
							<section style={{display: "flex"}}>
								<div style={{marginRight: "1em"}}>
									<Button name="Default Button" buttonColor="" />
									<Button name="Blue Button" buttonColor="blue-solid-button" />
									<Button name="Green Button" buttonColor="green-solid-button" />
									<Button name="Orange Button" buttonColor="orange-solid-button" />
								</div>
								
								<div style={{marginRight: "1em"}}>
									<Button name="Default Button" buttonColor="" size="medium" />
									<Button name="Blue Button" buttonColor="blue-solid-button" size="medium" />
									<Button name="Green Button" buttonColor="green-solid-button" size="medium" />
									<Button name="Orange Button" buttonColor="orange-solid-button" size="medium" />
								</div>

								<div style={{marginRight: "1em"}}>
									<Button name="Default Button" buttonColor="" size="large" />
									<Button name="Blue Button" buttonColor="blue-solid-button" size="large" />
									<Button name="Green Button" buttonColor="green-solid-button" size="large" />
									<Button name="Orange Button" buttonColor="orange-solid-button" size="large" />
								</div>
							</section>
						</div>

						<SyntaxHighlighter language="javascript" style={docco}>
				      {solidButtons}
				    </SyntaxHighlighter>

				    <hr style={{marginBottom: "50px"}}/>



					</section>

				</section>
			</Layout>

		)
}

export default Buttons