import React from 'react'

import '../css/style.scss'

const Alert = (props) => {

	const {content, state, close} = props;

	return (

		<span className={`alert ${state}`}>
			<span className="alert-content">{content}</span>
			{close === true &&
				<button className="close-alert">&times;</button>
			}
		</span>

	)

}

export default Alert