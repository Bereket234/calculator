import React from 'react'

const Button = (props) =>{
	return(
	
		<div>
			<button onClick= {props.onPress} value={props.value}className= {typeof props.name==='undefined'?"btn": props.name}>
				{props.children}
			</button>
			</div>
			
	)
}
export default Button;