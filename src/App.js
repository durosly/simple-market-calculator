import { useState } from "react"
import Buttons from "./components/Buttons"
import Display from "./components/Display"

function App() {
	const [calcDisplay, setCalcDisplay] = useState("0")
	return (
		<div className=''>
			<h1>Market calculator</h1>
			<div className='container'>
				<Display calcDisplay={calcDisplay} />
				<Buttons setCalcDisplay={setCalcDisplay} />
			</div>
		</div>
	)
}

export default App
