import React from "react";
import {MainButton} from "./buttons/MainButton";

const User = (props) => {
	return (
		<div className='user' key={props.user.id}>
			<MainButton clickFunction={props.deleteUser(props.user.id)} buttonTitle='Delete'/>
			<h3> {props.user.firstName} {props.user.lastName}</h3>
			<p>{props.user.age}</p>
		</div>
	)
}

export default User