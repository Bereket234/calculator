import React from 'react'
import KeyPadRow from './KeyPadRow'
import Button from "../Button"

const KeyPad = (props) => {
return(
	<div>
		<KeyPadRow>
			<Button value='c' onPress={props.onClear}>c</Button>
			<Button value='/' onPress={props.onPress}>/</Button>
			<Button value='*' onPress={props.onPress}>*</Button>
			<Button value='del' onPress={props.onDel}>del</Button>
		</KeyPadRow>
		<KeyPadRow>
			<Button value='1' onPress={props.onPress}>1</Button>
			<Button value='2' onPress={props.onPress}>2</Button>
			<Button value='3' onPress={props.onPress}>3</Button>
			<Button value='%' onPress={props.onPress}>%</Button>
		</KeyPadRow>
		<KeyPadRow>
			<Button value='4' onPress={props.onPress}>4</Button>
			<Button value='5' onPress={props.onPress}>5</Button>
			<Button value='6' onPress={props.onPress}>6</Button>
			<Button value='-' onPress={props.onPress}>-</Button>
		</KeyPadRow>
		<KeyPadRow>
			<Button value='7' onPress={props.onPress}>7</Button>
			<Button value='8' onPress={props.onPress}>8</Button>
			<Button value='9' onPress={props.onPress}>9</Button>
			<Button value='+' onPress={props.onPress}>+</Button>
		</KeyPadRow>
		<KeyPadRow>
			<Button value='.' onPress={props.onPress}>.</Button>
			<Button value='0' onPress={props.onPress}>0</Button>
			<Button value='=' onPress={props.onEqual} name = "largeBtn">=</Button>
		</KeyPadRow >
	</div>	
)

}
export default KeyPad;