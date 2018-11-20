import React from 'react';
import './styles/Signature.css'

export class Signature extends React.Component {


    render = () => {
    
        return (
            <p id="sig">{this.props.name} </p>
        )
    }
}