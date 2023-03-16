import React from "react";

const User = (props) => {
	return (
		<div className='user' key={props.user.id}>
			<h3> {props.user.firstName} {props.user.lastName}</h3>
			<p>{props.user.age}</p>
		</div>
	)
}

export default User