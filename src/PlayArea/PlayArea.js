import React, { Component } from 'react';
import CharacterBox from "../CharacterBox/CharacterBox";
import "./PlayArea.css";


export default class PlayArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { noOfColumns: props.cols, noOfRows: props.rows, toggle: '' };
        this.CharacterBoxClicked = this.CharacterBoxClicked.bind(this);
    }
    render() {
        let boxes = [];
        let boxCols = [];
        for (let i = 0; i < this.props.cols; i++) {
            for (let j = 0; j < this.props.rows; j++) {
                boxCols.push(<CharacterBox
                    callToParent={(event, box) => { this.CharacterBoxClicked(event,box, i, j)}}
                    id={`Character_${i}_${j}`}
                    key={`Character_${i}_${j}`}
                    toggle={this.state.toggle} />);
            }
            boxes.push(<div className="BoxWrapper" key={`BoxWrapper_${i}`} >{boxCols}</div>);
            boxCols = [];
        }
        return (
            boxes
        )
    }

    CharacterBoxClicked(event, CharacterBox,i , j) {
        console.log("I", i, "J", j)
        var values = {i: i, j: j, value: this.state.toggle|| "S"};
        console.log(values);
        this.setState(function(prevState){
            prevState.toggle = prevState.toggle == 'S' || prevState.toggle == ''? 'O'  : 'S';
            return {
                toggle: prevState.toggle
            };
        })
        if (this.props.callToParent) {
            this.props.callToParent(event, this, CharacterBox);
        }   
    }
}