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
			birthday: ""
		};

		this.changeName = this.changeName.bind(this);
		this.changeSurname = this.changeSurname.bind(this);
		this.changeSelect = this.changeSelect.bind(this);
		this.changeBirthday = this.changeBirthday.bind(this);
	}

	changeName(newname){
		this.setState({name: newname});
		console.log(this.state.name);
	}

	changeSurname(newsurname) {
		this.setState({surname: newsurname});
		console.log(this.state.surname);
	}

	changeSelect(newcountry) {
		this.setState({country: newcountry});
		console.log(this.state.country);
	}

	changeBirthday(newbirthday) {
		this.setState({birthday: newbirthday});
		console.log(this.state.birthday);
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
					/>
				</div>

				<div id="tablediv">
					<Displayer />
				</div>

				<div id="sentence">
				</div>

			</div>
		)
	}
}