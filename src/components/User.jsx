import React from "react";

const User = (props) => {
	return (
		<div className='user' key={props.user.id}>
			<button onClick={() => props.deleteUser(props.user.id)} >Delete</button>
			<h3> {props.user.firstName} {props.user.lastName}</h3>
			<p>{props.user.age}</p>
		</div>
	)
}

export default User