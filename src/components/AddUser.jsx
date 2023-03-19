import React, {useState} from "react";


const AddUser = (props) => {
	const [data, setData] = useState({firstName: '', lastName: '', age: ''});
	
	return (
		
		<form>
			<input placeholder='FirstName' onChange={event => setData(prev => ({...prev, firstName: event.target.value}))} value={data.firstName}/>
			<input placeholder='LastName' onChange={event => setData(prev => ({...prev, lastName: event.target.value}))} value={data.lastName}/>
			<input placeholder='Age' onChange={event => setData(prev => ({...prev, age: event.target.value}))} value={data.age}/>
			<button type='button' onClick={() => {
				props.onAdd({data});
			}
			}>Добавити
			</button>
			<button onClick={props.reset}>Reset</button>
		</form>
	)
}

export default AddUser