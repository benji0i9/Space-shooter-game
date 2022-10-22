import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import "../App.css";

function Timer() {
    //onComplete
    const Completionist = () => <span>You are good to go!</span>
    //custom renderer
    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            // Render a complete state
            return <Completionist />;
        } else if ({seconds} >= 9){
            // Render a countdown
            return (
                <span style={{ color: "white", fontSize: 30, }}>
                    {minutes}:0{seconds}
                </span>
            );
        } else{
            // Render a fixed seconds
            return (
                <span style={{ color: "white", fontSize: 30, }}>
                    {minutes}:0{seconds}
                </span>
            );
        }
    }
    return (
        <div id="countdown">
            <Countdown renderer={renderer} date={Date.now() + 500000} />,
        </div>
    );
    
};


export default Timer;