import React from 'react';

export class Form extends React.Component {

	constructor(props){
		super(props);
		this.state ={
			countries: []
		};
	}

	componentWillMount(){

		fetch('https://restcountries.eu/rest/v2/all').then(response => {
			return response.json();
		}).then(data => {
			let countryNames = data.map(elem => <option value={elem['name'].toLowerCase()}>{elem['name']}</option>);
			this.setState({countries: countryNames});
		});
	}
	

	render(){

		return (
			<div id="formcontainer">
				<form>
					<span>Name: </span><input type="text" name="name" placeholder="name here"/><br/>
					<span>Surname: </span><input type="text" name="surname" placeholder="name here"/><br/>
					<span>Country: </span>
					<select placeholder="Countries">
						<option value="" disabled selected>Countries</option>
						{this.state.countries}
					</select><br/>
					<span>Birthday</span><input type="text" name="birthday" placeholder="mm/dd/yyyy"/><br/>
					<button type="submit" value="save">Save</button>
				</form>
			</div>
			)
		
	}
}

//perguntar se tenho que fazer eject para mexer no webpack