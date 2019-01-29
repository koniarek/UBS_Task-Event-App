import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components'

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center',
	backgroundColor: '#eee',
	padding: '20px 20px'
};


const RadioButton= ({ id, title, name, value, checked=false }) => (
	<Label>
		{label}
		<Input type="radio" id={id} title = {title} name= {name} value= {value} defaultChecked={checked} />
		<Checkmark onClick={handleRadioButtonChange} />
	</Label>
)

const Label = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  padding-left: 24px;
  margin-right: 24px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const Checkmark = styled.span` 
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: #fff;
  border-radius: 50%;

  &:after {
      content: "";
      position: absolute;
      display: none;
      top: 4px;
      left: 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #fff;
  }
`

const Input = styled.input`
  position: absolute;
  opacity: 0;

   &:checked ~ ${Checkmark} {
    background-color: #10cfbd; 

    &:after {
      display: block;
    }
  }
`

const handleRadioButtonChange = (e) => {
	const parent = e.target.parentElement
	const element = parent.querySelector('input')
	if(!element.checked) element.checked = true
}
export default RadioButton;
