import React from "react";
import style from "../css/main.css"


const Users = () => {
	
	class User {
		constructor(firstName, lastName, age, id) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.age = age;
			this.id = id;
		}
	}
	
	const user1 = new User('Sviatoslav', 'Pudelko', 22, 1)
	const user2 = new User('Miha', 'Bereza', 22, 2)
	const user3 = new User('Ilona', 'Puko', 23, 3)
	const user4 = new User('Nazar', 'Solove', 21, 4)
	const user5 = new User('Ira', 'Solove', 20, 5)
	const user6 = new User('Nazar', 'Himin', 25, 6)
	
	const arrayUser = [user1, user2, user3, user4, user5, user6]
	
	
	{
		return (
			<div>
				{arrayUser.map((element) => (
					<div className={style.user} key={element.id}>
						<h3> {element.firstName} {element.lastName}</h3>
						<p>{element.age}</p>
					</div>
				))}
			</div>
		)
	}
}

export default Users