import React, {useState} from "react";
import User from "./User";
import AddUser from "./AddUser";


const Users = () => {
	
	const [arrayUsers, setArrayUsers] = useState([])
	
	const addUser = (user) => {
		const id = arrayUsers.length + 1;
		setArrayUsers(prev => [...prev, {...user, id}])
	}
	const reset = () => {
		setArrayUsers([])
	}
	
	const deleteUserId = (id) => {
		arrayUsers.filter((element) => element.id !== element)
		setArrayUsers(arrayUsers)
	}
	
	{
		return (
			<div>
				<AddUser onAdd={addUser} reset={reset}/>
				{arrayUsers.length > 0 ?
					arrayUsers.map((element) => (
						<User onDelete={deleteUserId} key={element.id} user={element}/>
					))
					:
						<div>
							<h4>No users</h4>
						</div>}
			</div>
		
		
		)
	}
}

export default Users