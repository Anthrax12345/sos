import React, { Component } from 'react';
import "./CharacterBox.css";

export default class CharacterBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...props }
        this.state.currentCharacterState = this.props.currentCharacterState || false;
        this.onCharacterBoxChange = this.onCharacterBoxChange.bind(this);
    }

    render() {
        return (
            <label htmlFor={this.props.id} className="CharacterBox" onClick={this.onCharacterBoxChange}>
            <input type='radio' 
                disabled={this.state.currentCharacterState}
                id={this.props.id}
                />{this.state.label}
            </label>
        )
    }

    onCharacterBoxChange(event) {
        if (!this.state.currentCharacterState){
            this.setState({ label: this.props.toggle || 'S', currentCharacterState: true })
            if (this.props.callToParent) {
                this.props.callToParent(event, this)
            }
        }

    }
}