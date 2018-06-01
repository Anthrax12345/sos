import React, { Component } from 'react';
import './Board.css';
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import PlayArea from "../PlayArea/PlayArea";
import GameControls from "../GameControls/GameControls";

export default class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {...props}
    }
    render() {
       return (
       <div className='board-entry'>
        <ScoreBoard />
        <PlayArea rows = {this.state.rows} cols={this.state.cols} />
        <GameControls />
       </div>)
    }
}