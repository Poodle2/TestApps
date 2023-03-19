

export const MainButton = (props) => {
	return (
		<button type='button' onClick={props.clickFunction}>{props.buttonTitle}</button>
	)
}