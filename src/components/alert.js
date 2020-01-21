import React from 'react'

import '../css/alerts.scss'

const Alert = (props) => {

	const {content, state} = props;

	return (

		<span className={`alert ${state}`}>{content}</span>

	)

}

export default Alert