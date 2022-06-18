import React, { Component } from 'react'
import Calculation from "./Screen/Calculation"
import KeyPad from './KeyPad/keyPad'
import Result from "./Screen/Result"

export default class Calculator extends Component {

constructor  (){
	super();
	this.state= {
		equation: "",
		result: ''
	}
	this.handleClick=this.handleClick.bind(this)
	this.clear=this.clear.bind(this)
	this.deleted=this.deleted.bind(this)
	this.onEquals =this.onEquals.bind(this)
	this.handleChange=this.handleChange.bind(this)
}
handleChange(event){
	this.setState({
		equation: event.target.value
	})
}
handleClick(event){
const buttonValue = event.target.value
let equation = this.state.equation;
if ((buttonValue<=9 && buttonValue>=0) || buttonValue === '.'){
	equation += buttonValue
}else if(['/','*','+','-','%'].indexOf(buttonValue) !== '-1'){
	equation += ' ' + buttonValue +' '
}
this.setState({
	equation:equation
})
}
clear (){
	this.setState({
		equation:'',
		result:''
	
	})
}
deleted(){
	var equation =this.state.equation
	equation= equation.trim()
	equation = equation.substr(0,equation.length-1)
	this.setState({
		equation:equation
	})
}
onEquals(){
	var equation= this.state.equation
	try{
		const evalue = eval(equation)
		const result = Number.isInteger(evalue)? evalue:evalue.toFixed(2)
		this.setState({result})
	}catch(error){
		alert ("mathematical error")
	}
}

render(){
	return(
		<main className="calculator">
			<section className= "Screen">
			<Calculation equation={this.state.equation} handleChange ={this.handleChange}>
			</Calculation>
			<Result result={this.state.result}>
			</Result>
			</section>
			<KeyPad 
				onPress={this.handleClick} 
				onClear={this.clear} 
				onDel={this.deleted}
				onEqual={this.onEquals}
			>
			</KeyPad>
			
		</main>
		)
	}
}
 