import React from 'react'

const Button = (props) => {

	const {name, buttonColor, size} = props;

	return (

		<button className={`button ${buttonColor} ${size}`}>{name}</button>

	)

}

export default Button