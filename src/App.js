import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";

const App = () => {
	
	
	return (
		<div>
			<Header title='Список користовачів'/>
			<main>
				<Users/>
			</main>
		</div>
	)
}

export default App