import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import style from "./css/main.css"
import Users from "./components/Users";

const App = () => {
	

	return (
		<div>
			<Header title='Список користовачів'/>
			<main>
				<Users/>
				<aside></aside>
			</main>
			
		</div>
	)
}

export default App