import React from 'react';
import './styles/Sentence.css';

export const Sentence = ({row}) => {

    const months = {
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

    const today = new Date();
    const year = today.getFullYear();

    if(row !== ""){
        let birthday = row.birthday.split("/");

        return (
            <p id="years">Hello {row.name} from {row.country}, on {birthday[1]} of {months[birthday[0]]} you will be {year - birthday[2]}</p>
        )
    }
    return null;
}