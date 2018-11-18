import React from 'react';
import './styles/Signature.css'

export class Signature extends React.Component {


    render() {

        let name = this.props.name.props.children[0].props.children;

        return (
            <p id="sig">{name} </p>
        )
    }
}