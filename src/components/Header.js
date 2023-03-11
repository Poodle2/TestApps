import React from "react";
import style from "../css/main.css"


class Header extends React.Component {
	render() {
		return (
			<header className={style.header}>{this.props.title}</header>
		)
	}
}

export default Header