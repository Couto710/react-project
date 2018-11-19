import React from 'react';
import './styles/Form.css';

export class Form extends React.Component {

	constructor(props){
		super(props);
		this.state ={
			countries: [],
		};
	}

	componentWillMount = () => {

		fetch('https://restcountries.eu/rest/v2/all').then(response => {
			return response.json();
		}).then(data => {
			let countryNames = data.map(elem => <option value={elem['name']}>{elem['name']}</option>);
			this.setState({countries: countryNames});
		});
	}	

	render = () => {

		return (
				<form id="form">
					<p>Name: </p><input type="text" name="name" value={this.props.name} placeholder=" name here" onChange={this.props.changeName}/><br/>
					<p>Surname: </p><input type="text" name="surname" value={this.props.surname} placeholder=" name here" onChange={this.props.changeSurname}/><br/>
					<p>Country: </p>
					<select value={this.props.country} onChange={this.props.changeSelect}>
						<option value="countries" disabled>Countries</option>
						{this.state.countries}
					</select><br/>
					<p>Birthday: </p><input type="text" name="birthday" value={this.props.birthday} placeholder=" mm/dd/yyyy" onChange={this.props.changeBirthday}/><br/>
					<button type="button" value="save" onClick={this.props.submit}>Save</button>
				</form>
			)
		
	}
}
