function Button({ btn: { type, value }, action }) {
	// const { btn } = props
	// const { type, value } = btn
	// console.log(props.btn.value)

	// TODO: append to display when button is click
	// TODO: differentiate btw number and other versions
	// TODO: hold display value

	return (
		<button onClick={() => action({ type, value })} className={type}>
			{value}
		</button>
	)
}

export default Button
