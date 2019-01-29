import React from 'react';


const Select = (props) => {
	return(<div className="form-group">
			<label for={props.value}> {props.title} </label>
		    <select
		      id = {props.id}
		      value={props.value}
		      label={props.title}
		      onChange={props.handleChange}
		      className="form-control">
		      <option value="" disabled>{props.placeholder}</option>
		      {props.options.map(option => {
		        return (
		          <option
		            id={option}
		            value={option}
		            label={option}>{option}</option>
		        );
		      })}
		    </select>
  </div>)
}

export default Select;
