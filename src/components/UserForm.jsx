import React, {useState} from "react";
import {MainButton} from "./buttons/MainButton";


const UserForm = (props) => {
	const [data, setData] = useState({firstName: '', lastName: '', age: ''});
	
	return (
		
		<form>
			<input placeholder='FirstName' onChange={event => setData(prev => ({...prev, firstName: event.target.value}))} value={data.firstName}/>
			<input placeholder='LastName' onChange={event => setData(prev => ({...prev, lastName: event.target.value}))} value={data.lastName}/>
			<input placeholder='Age' onChange={event => setData(prev => ({...prev, age: event.target.value}))} value={data.age}/>
			<MainButton clickFunction={props.addUser(data)} buttonTitle='Add user'/>
			<MainButton clickFunction={props.reset} buttonTitle='Reset'/>
		</form>
	)
}

export default UserForm