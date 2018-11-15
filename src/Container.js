import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Container.css'
import {Form} from './Form'

export class Container extends React.Component {

	constructor(props){
		super(props);
		this.state={

		};
	}



	render() {
		return (

			<div id="cont"> 
				<div id="forminputs">
					<Form />
				</div>

				<div id="table">
				</div>

				<div id="sentence">
				</div>

			</div>

			)
	}

}