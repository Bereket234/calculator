import React from 'react'
import Button from '../Button'

const KeyPadRow = (props)=> {
	return(
		<div className="keyPadRow">
			{props.children}
		</div>
	)
}
export default KeyPadRow;