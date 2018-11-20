import React from 'react';
import './styles/Container.css';
import {Form} from './Form';
import {Displayer} from './Displayer';
import {Sentence} from './Sentence';
import {Signature} from './Signature';


export class Container extends React.Component {

	constructor(props){
		super(props);

		this.tableClick = this.tableClick.bind(this);
		this.state={
			name: "",
			surname: "",
			country: "countries",
			birthday: "",
			rows: [],
			selected: 0
		};

		this.changeName = this.changeName.bind(this);
		this.changeSurname = this.changeSurname.bind(this);
		this.changeSelect = this.changeSelect.bind(this);
		this.changeBirthday = this.changeBirthday.bind(this);
		this.checkForm = this.checkForm.bind(this);
	}

	changeName = e => {
		this.setState({name: e.target.value});
	}

	changeSurname = e => {
		this.setState({surname: e.target.value});
	}

	changeSelect = e => {
		this.setState({country: e.target.value});
	}

	changeBirthday = e => {
		this.setState({birthday: e.target.value});
	}

	tableClick = e => {
		this.setState({selected: parseInt(e.target.getAttribute('value'))});
	}

	checkForm = () => {

		if(/^[a-zãáéêõóí]*$/i.test(this.state.name) === false || this.state.name.length === 0){
			alert("Name is not valid! No special characters allowed, or empty field. Error: " + this.state.name);
		}
		else if(/^[a-zãáéêõóí]*$/i.test(this.state.surname) === false || this.state.surname.length === 0){
			alert("Surname is not valid! No special characters allowed, or empty field. Error: " + this.state.surname);
		}
		else if(this.state.country === "countries"){
			alert("Please choose a country!");
		}
		else if(/^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])\/([01]\d{3}|200\d|201[0-8])$/.test(this.state.birthday) === false){
			alert("Invalid date! Use required format, and possible dates (no future dates, <2018). Error: " + this.state.birthday);
		}

		else{
			let fullname = this.state.name + " " + this.state.surname;
			let newselected = this.state.rows.length;
			let row =<tr key={String(newselected)} onClick={this.tableClick}>
						<td value={String(newselected)}>{fullname}</td>
						<td value={String(newselected)}>{this.state.country}</td>
						<td value={String(newselected)}>{this.state.birthday}</td>    
					</tr>;
			
			let newrows = [...this.state.rows, row];
			this.setState({
				rows: newrows,
				name: "",
				surname: "",
				country: "countries",
				birthday: ""
			}, () => {
				this.setState({
					selected: newselected
				})
			});
		}
	}

	render = () => {
		return (

			<div id="cont"> 
				<div id="forminputs">
					<Form  
					name={this.state.name}
					surname={this.state.surname}
					country={this.state.country}
					birthday={this.state.birthday}
					changeName={this.changeName}
					changeSurname={this.changeSurname}
					changeSelect={this.changeSelect}
					changeBirthday={this.changeBirthday}
					submit={this.checkForm}
					/>
				</div>

				<div id="tablediv">
					<div id="display">
						<Displayer rows={this.state.rows}/>
					</div>

					<div id="signature">
							<Signature name={this.state.rows.length === 0 ? "" : this.state.rows[this.state.selected]} />
					</div>
				</div>


				<div id="sentence">
					<Sentence row={this.state.rows.length === 0 ? "" : this.state.rows[this.state.selected]}/>
				</div>

			</div>
		)
	}

}