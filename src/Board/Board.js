import React, { Component } from 'react';
import './Board.css';
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import PlayArea from "../PlayArea/PlayArea";
import GameControls from "../GameControls/GameControls";

export default class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {...props}
        this.boardClick = this.boardClick.bind(this);
    }
    render() {
       return (
       <div className='board-entry'>
        <ScoreBoard />
        <div className="PlayAreaWrapper">
            <PlayArea rows={this.state.rows} cols={this.state.cols} callToParent={this.boardClick}/>
        </div>
        <GameControls />
       </div>)
    }
    boardClick(event, PlayArea, CharacterBox){
        console.log("Board updates")
    }
}