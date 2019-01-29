import React, {Component} from 'react';
import { render } from 'react-dom';


/* Import Components */
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import RadioButton from '../components/RadioButton';
import Button from '../components/Button'

class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			initialValues: {
				title: '',
				description: '',
				category: '',
				paid_event: '',
				event_fee: '',
				reward: '',
				date: '',
				date_format: '',
				duration: '',

				coordinator: {
					responsible: '',
					coordinator_email: ''
				},

				categoryOptions: [

					{id: 0, value: "Cycling", title: "Cycling"},
					{id: 1, value: "Hiking", title: "Hiking"},
					{id: 2, value: "Cooking", title: "Cooking"},
					{id: 3, value: "Rock climbing", title: "Rock climbing"},
					{id: 4, value: "Yoga", title: "Yoga"},
					{id: 5, value: "Fencing", title: "Fencing"},
					{id: 6, value: "Swimming", title: "Swimming"},
					{id: 7, value: "Badminton", title: "Badminton"},
					{id: 8, value: "Running", title: "Running"},
					{id: 9, value: "Dance", title: "Dance"}],

				paid_eventOptions: [
					{id: 1, value: "Free Event", title: "Free Event"},
					{id: 2, value: "Paid Event", title: "Paid Event"}],

				coordinatorOptions: [
					{id: 0, value: "Daniel Mitchell", title: "Daniel Mitchell", email: "daniel.mitchell@hussa.rs"},
					{id: 1, value: "Albert Alexander", title: "Albert Alexander", email: "albert.alexander@hussa.rs"},
					{id: 2, value: "Philip Hughes", title: "Philip Hughes", email: "philip.hughes@hussa.rs"},
					{id: 3, value: "Walter Nelson", title: "Walter Nelson", email: "walter.nelson@hussa.rs"},
					{id: 4, value: "Ashley Hernandez", title: "Ashley Hernandez", email: "ashley.hernandez@hussa.rs"},
					{id: 5, value: "Donna Washington", title: "Donna Washington", email: "donna.washington@hussa.rs"},
					{id: 6, value: "Andrew White", title: "Andrew White", email: "andrew.white@hussa.rs"},
					{id: 7, value: "Sharon Allen", title: "Sharon Allen", email: "sharon.allen@hussa.rs"},
					{id: 8, value: "Russell Parker", title: "Russell Parke", email: "russell.parker@hussa.rs"},
					{id: 9, value: "Janet Stewart", title: "Janet Stewart", email: "janet.stewart@hussa.rs"}
				],

				formatOptions: [
					{id: 1, value: "AM", title: "AM"},
					{id: 2, value: "PM", title: "PM"}]
			},
	}

		this.handleTitle = this.handleTitle.bind(this);
		this.handleTextArea = this.handleTextArea.bind(this);
		this.handleReward = this.handleReward.bind(this);
		this.handleEvent_fee = this.handleEvent_fee.bind(this);
		this.handleDuration = this.handleDuration.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleRadioButton = this.handleRadioButton.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);

	}

	/* This lifecycle hook gets executed when the component mounts */

	handleTitle(e) {
		let value = e.target.value;
		this.setState( prevState => ({ initialValues:
				{...prevState.initialValues, title: value
				}
		}), () => console.log(this.state.initialValues))
	}

	handleTextArea(e) {
		console.log("Write the description of mentioned event");
		let value = e.target.value;
		this.setState(prevState => ({
			initialValues: {
				...prevState.initialValues, description: value
			}
		}), ()=>console.log(this.state.initialValues))
	}

	handleRadioButton(e) {
		let value = e.target.value;
		this.setState( prevState => ({ initialValues:
				{...prevState.initialValues, title: value
				}
		}), () => console.log(this.state.initialValues))
	}



	handleReward(e) {
		let value = e.target.value;
		this.setState( prevState =>  ({ initialValues:
				{...prevState.initialValues, reward: value
				}
		}), () => console.log(this.state.initialValues))
	}

	handleEmail(e) {
		let value = e.target.value;
		this.setState( prevState => ({ initialValues:
				{...prevState.initialValues, title: value
				}
		}), () => console.log(this.state.initialValues))
	}


	handleFormSubmit(e) {
		e.preventDefault();
		let userData = this.state.initialValues;

		fetch('http://example.com',{
			method: "POST",
			body: JSON.stringify(userData),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(response => {
			response.json().then(data =>{
				console.log("Successful" + data);
			})
		})
	}

	handleClearForm(e) {

		e.preventDefault();
		this.setState({
			initialValues: {
				title: '',
				description: '',
				category: '',
				paid_event: '',
				reward: '',
				responsible:'',
				email:''

			},
		})
	}

	render() {
		return (
		<form className="container-fluid" onSubmit={this.handleFormSubmit}>
			<Input inputType={'string'}
			       name={'title'}
			       title= {'Title'}
			       value={this.state.initialValues.title}
			       placeholder = {'Make it short and clear.'}
			       handleChange = {this.handleInput} />

			<TextArea inputType={'string'}
			          name={'description'}
			          title={'Description'}
			          rows={10}
			          value={this.state.initialValues.description}
			          handleChange={this.handleTextArea}
			          placeholder={'Write about your event, Be creative,'} />


			<Select title ={'Category'}
			        name = {'category'}
			        options = {this.state.categoryOptions}
			        value = {this.state.initialValues.categoryOptions}
			        placeholder = {'Select Category'}
			        handleChange = {this.handleInput} />

			<RadioButton title ={'Payment'}
			             name = {'paid_event'}
			             options = {this.state.categoryOptions}
			             value = {this.state.initialValues.categoryOptions}
			             placeholder = {'Select Category'}
			             handleChange = {this.handleInput} />

			<Input inputType={'number'}
			       name = {'reward'}
			       title= {'Reward'}
			       value={this.state.initialValues.reward}
			       placeholder = {'Number'}
			       handleChange={this.handleReward} />
			<Button
				action = {this.handleFormSubmit}
				type = {'primary'}
				title = {'Submit'}
				style={buttonStyle} />

			<Button
				action = {this.handleClearForm}
				type = {'secondary'}
				title = {'Clear'}
				style={buttonStyle} />

		</form>

		 );
	   }
	}
const buttonStyle = {
	margin : '10px 10px 10px 10px'
}

export default FormContainer;

