import React from 'react'

const Calculation = (props) => {
	return (
		<div className= "Calculation">
		<input 
			type="text" 
			value={props.equation}
			onChange={props.handleChange}
		/>
			
		</div>
	)
}
export default Calculation;