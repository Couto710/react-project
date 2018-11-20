import React from 'react';
import './styles/Displayer.css';

export class Displayer extends React.Component {

    render = () => {

        let rows = this.props.rows.map(r => (
            <tr key={r.key} onClick={this.props.onClick}>
				<td value={r.key}>{r.name}</td>
				<td value={r.key}>{r.country}</td>
				<td value={r.key}>{r.birthday}</td>
			</tr>
        ));

        return (
            <table id="table">
            <tbody>
                <tr id ="headrow">
                    <th id="r1">name</th>
                    <th id="r2">Country</th>
                    <th id="r3">birthday</th>    
                </tr>
                {rows}
            </tbody>
            </table>
        )
    }

}