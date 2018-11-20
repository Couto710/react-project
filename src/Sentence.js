import React from 'react';
import './styles/Sentence.css';

export class Sentence extends React.Component {

    months = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December"
    };

    today = new Date();
    year = this.today.getFullYear();

    render = () => {

        if (this.props.row !== "") {
            let birthday = this.props.row.birthday.split("/");

            return (
                <p id="years">Hello {this.props.row.name} from {this.props.row.country}, on {birthday[1]} of {this.months[birthday[0]]} you will be {this.year - birthday[2]}</p>
            );
        }
        return null;
    }
}