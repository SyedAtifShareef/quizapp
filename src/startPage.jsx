import React from "react";


export default function startPage(props){

    return(
        <div className="start">
        <h1 className="heading">Quiz App</h1>
        <p className="introText">Test your knowledge with this amazing quiz app</p>
        <button className="btnStart" onClick={props.changeValue}>Start Quiz</button>
        </div>
    )
}