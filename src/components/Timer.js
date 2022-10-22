import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import "../App.css";

function Timer() {
    
    return (
        <div id="countdown">
           <Countdown style={{color: "#ffffff",}} date={Date.now() + 10000} />,
        </div>
    );
}



export default Timer;