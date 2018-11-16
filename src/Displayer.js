import React from 'react';
import './styles/Displayer.css';

export class Displayer extends React.Component {

    render() {

        return (
            <table id="table">
                <tr>
                    <th>name</th>
                    <th>Country</th>
                    <th>birthday</th>    
                </tr>            
            </table>
        )
    }

}