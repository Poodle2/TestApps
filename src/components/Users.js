import React, {useState} from "react";
import User from "./User";
import AddUser from "./AddUser";



const Users = () => {
	
	const [arrayUsers, setArrayUsers] = useState([])
	
	const addUser = (user) => {
		let arrayUser = [...arrayUsers]
		const id = arrayUser.length + 1;
		arrayUser.push({...user, id})
		setArrayUsers([...arrayUser])
	}
	const reset = () => {
		setArrayUsers([])
	}
	
	{
		return (
			<div>
				<AddUser onAdd={addUser} reset={reset}/>
				{arrayUsers.map((element) => (
					<User key={element.id} user={element}/>
				))}
			</div>
		)
	}
}

export default Users