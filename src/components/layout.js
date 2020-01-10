import React from 'react'

import Sidebar from '../components/sidebar'


import '../css/style.scss'


const Layout = (props) => {

	return (

		<main className="container">
			<Sidebar/>
			{props.children}
		</main>

	)

}

export default Layout