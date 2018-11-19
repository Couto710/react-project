import React from 'react';
import './styles/Displayer.css';

export class Displayer extends React.Component {

    render = () => {

        return (
            <table id="table">
                <tr id ="headrow">
                    <th id="r1">name</th>
                    <th id="r2">Country</th>
                    <th id="r3">birthday</th>    
                </tr>
                {this.props.rows}
            </table>
        )
    }

}