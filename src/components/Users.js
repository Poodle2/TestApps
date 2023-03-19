import React, {useState} from "react";
import User from "./User";
import UserForm from "./UserForm";
import user from "./User";


const Users = () => {
	
	const [arrayUsers, setArrayUsers] = useState([])
	
	const createUser = (user) => {
		const id = arrayUsers.length + 1;
		setArrayUsers(prev => [...prev, {...user, id}])
	}
	const reset = () => {
		setArrayUsers([])
	}
	
	const deleteUserById = (id) => {
		 const activeUsers = arrayUsers.filter(user => user.id !== id);
		setArrayUsers(activeUsers)
	}
	
	{
		return (
			<div>
				<UserForm addUser={createUser} reset={reset}/>
				{arrayUsers.length === 0 ?
					arrayUsers.map((element) => (
						<User deleteUser={deleteUserById} key={element.id} user={element}/>
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