import React, {useState} from "react";


const AddUser = (props) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState('');
	
	const firstNameInput = 'FirstName'
	const lastNameInput = 'LastName'
	const ageInput = 'Age'
	
	return (
		<form>
			<input placeholder={firstNameInput} onChange={event => setFirstName(event.target.value)}/>
			<input placeholder={lastNameInput}  onChange={event => setLastName(event.target.value)}/>
			<input placeholder={ageInput} onChange={event => setAge(event.target.value)}/>
			<button type='button' onClick={() => {
				props.onAdd({firstName,lastName,age});
			}
			}>Добавити
			</button>
			<button onClick={props.reset}>Reset</button>
		</form>
	)
}

export default AddUser