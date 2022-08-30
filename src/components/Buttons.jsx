import { useState, useEffect } from "react"
import calcBtnData from "../data/buttons.json"
import Button from "./Button"

function Buttons({ setCalcDisplay }) {
	const [displayValue, setDisplayValue] = useState("")
	const [tempValue, setTempValue] = useState("")
	const [operator, setOperator] = useState("")
	const [result, setResult] = useState("")
	const [hasAddedPeriod, setHasAddedPeriod] = useState(false)
	// console.log(calcBtnData)
	console.log(displayValue, operator, tempValue)
	// setCalcDisplay(displayValue)

	useEffect(() => {
		if (displayValue) setCalcDisplay(displayValue)
	}, [displayValue, setCalcDisplay])

	function handleClick({ type, value }) {
		if (type === "number") {
			setDisplayValue((prev) => `${prev + value}`)
		} else if (type === "action") {
			// * handle emptying of display and beginning new value
			setTempValue(displayValue)
			setDisplayValue("")
			setOperator(value)
			setHasAddedPeriod(false)
			setCalcDisplay(value)
		} else if (type === "equal") {
			let data = null
			if (operator === "+") {
				data = Number(displayValue) + Number(tempValue)
				setResult(data)
			} else if (operator === "-") {
				data = Number(tempValue) - Number(displayValue)
				setResult(data)
			} else if (operator === "*") {
				data = Number(displayValue) * Number(tempValue)
				setResult(data)
			} else if (operator === "/") {
				data = Number(tempValue) / Number(displayValue)
				setResult(data)
			}

			setTempValue("")
			setDisplayValue("")
			setOperator("")
			setHasAddedPeriod(false)
			setCalcDisplay(`Result: ${data}`)
		} else if (type === "period") {
			if (!hasAddedPeriod) {
				setDisplayValue((prev) => `${prev + value}`)
				setHasAddedPeriod(true)
			}
		} else if (type === "clear") {
			if (value === "AC") {
				setTempValue("")
				setDisplayValue("")
				setOperator("")
				setHasAddedPeriod(false)
				setResult("")
			} else if (value === "C") {
				const data = displayValue.slice(0, displayValue.length - 1)
				setDisplayValue(data)
			}
		}
	}
	return (
		<div className='buttons'>
			{calcBtnData.map((row) => (
				<div key={JSON.stringify(row)} className='row'>
					{row.map((btn) => (
						<Button key={JSON.stringify(btn)} btn={btn} action={handleClick} />
					))}
				</div>
			))}
		</div>
	)
}

export default Buttons
