import React from 'react';
import './styles/Form.css';

export class Form extends React.Component {

	constructor(props){
		super(props);
		this.state ={
			countries: [],
		};

		this.handleName = this.handleName.bind(this);
		this.handleSurname = this.handleSurname.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.handleBirthday = this.handleBirthday.bind(this);
	}

	componentWillMount(){

		fetch('https://restcountries.eu/rest/v2/all').then(response => {
			return response.json();
		}).then(data => {
			let countryNames = data.map(elem => <option value={elem['name'].toLowerCase()}>{elem['name']}</option>);
			this.setState({countries: countryNames});
		});
	}

	handleName(e){
		this.props.changeName(e.target.value);
	}

	handleSurname(e) {
		this.props.changeSurname(e.target.value);
	}

	handleSelect(e) {
		this.props.changeSelect(e.target.value);
	}

	handleBirthday(e) {
		this.props.changeBirthday(e.target.value);
	}

	handleSubmit() {

	}
	

	render(){

		return (
				<form id="form">
					<p>Name: </p><input type="text" name="name" placeholder=" name here" onChange={this.handleName}/><br/>
					<p>Surname: </p><input type="text" name="surname" placeholder=" name here" onChange={this.handleSurname}/><br/>
					<p>Country: </p>
					<select placeholder="Countries" onChange={this.handleSelect}>
						<option value="" disabled selected>Countries</option>
						{this.state.countries}
					</select><br/>
					<p>Birthday: </p><input type="text" name="birthday" placeholder=" mm/dd/yyyy" onChange={this.handleBirthday}/><br/>
					<button type="button" value="save" onClick={this.handleSubmit}>Save</button>
				</form>
			)
		
	}
}

//perguntar se tenho que fazer eject para mexer no webpack