import React from 'react';
import './styles/Container.css';
import {Form} from './Form';
import {Displayer} from './Displayer';


export class Container extends React.Component {

	constructor(props){
		super(props);
		this.state={
			name: "",
			surname: "",
			country: "",
			birthday: "",
			rows: [
				<tr>
					<td>Ragnar Lothbrok</td>
					<td>Denmark</td>
					<td>03/24/1994</td>    
				</tr>,
				<tr>
					<td>Ragnar Lothbrok</td>
					<td>Denmark</td>
					<td>03/24/1994</td>    
				</tr>
			]
		};

		this.changeName = this.changeName.bind(this);
		this.changeSurname = this.changeSurname.bind(this);
		this.changeSelect = this.changeSelect.bind(this);
		this.changeBirthday = this.changeBirthday.bind(this);
		this.checkForm = this.checkForm.bind(this);
	}

	changeName(newname){
		this.setState({name: newname});
		//console.log(this.state.name);
	}

	changeSurname(newsurname) {
		this.setState({surname: newsurname});
		//console.log(this.state.surname);
	}

	changeSelect(newcountry) {
		this.setState({country: newcountry});
		//console.log(this.state.country);
	}

	changeBirthday(newbirthday) {
		this.setState({birthday: newbirthday});
		//console.log(this.state.birthday);
	}

	checkForm(){

		if(/^[a-z]*$/i.test(this.state.name) === false || this.state.name.length === 0){
			alert("Name is not valid! No special characters allowed, or empty field. Error: " + this.state.name);
		}
		else if(/^[a-z]*$/i.test(this.state.surname) === false || this.state.surname.length === 0){
			alert("Surname is not valid! No special characters allowed, or empty field. Error: " + this.state.surname);
		}
		else if(this.state.country.length === 0){
			alert("Please choose a country!");
		}
		else if(/^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])\/([01]\d{3}|200\d|201[0-8])$/.test(this.state.birthday) === false){
			alert("Invalid date! Use required format, and possible dates (no future dates, <2018). Error: " + this.state.birthday);
		}

		else{
			console.log(this.state.name);
			console.log(this.state.surname);
			console.log(this.state.country);
			console.log(this.state.birthday);

			let fullname = this.state.name + " " + this.state.surname;
			
			let row = <tr>
						  <td>{fullname}</td>
						  <td>{this.state.country}</td>
						  <td>{this.state.birthday}</td>    
					  </tr>;
			
			let newrows = this.state.rows;
			console.log(newrows.length);
			newrows.push(row);
			console.log(newrows.length);

			this.setState({rows: newrows});
			this.setState({name: ""});
			this.setState({surname: ""});
			this.setState({country: ""});
			this.setState({birthday: ""}, () => {
				console.log(this.state.rows);
			console.log(this.state.name);
			console.log(this.state.surname);
			console.log(this.state.country);
			console.log(this.state.birthday);
			});
		}
	}

	render() {
		return (

			<div id="cont"> 
				<div id="forminputs">
					<Form  
					changeName={this.changeName}
					changeSurname={this.changeSurname}
					changeSelect={this.changeSelect}
					changeBirthday={this.changeBirthday}
					submit={this.checkForm}
					/>
				</div>

				<div id="tablediv">
					<Displayer rows={this.state.rows}/>
				</div>

				<div id="sentence">
				</div>

			</div>
		)
	}
}