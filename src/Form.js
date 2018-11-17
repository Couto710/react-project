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
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount(){

		fetch('https://restcountries.eu/rest/v2/all').then(response => {
			return response.json();
		}).then(data => {
			let countryNames = data.map(elem => <option value={elem['name']}>{elem['name']}</option>);
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
		this.props.submit();
	}
	

	render(){

		return (
				<form id="form">
					<p>Name: </p><input type="text" name="name" value={this.props.name} placeholder=" name here" onChange={this.handleName}/><br/>
					<p>Surname: </p><input type="text" name="surname" value={this.props.surname} placeholder=" name here" onChange={this.handleSurname}/><br/>
					<p>Country: </p>
					<select value={this.props.country} onChange={this.handleSelect}>
						<option value="countries" disabled>Countries</option>
						{this.state.countries}
					</select><br/>
					<p>Birthday: </p><input type="text" name="birthday" value={this.props.birthday} placeholder=" mm/dd/yyyy" onChange={this.handleBirthday}/><br/>
					<button type="button" value="save" onClick={this.handleSubmit}>Save</button>
				</form>
			)
		
	}
}
