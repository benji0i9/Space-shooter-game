import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';


function Timer() {
    
    ReactDOM.render(
        <Countdown date={Date.now() + 10000} />,
        document.getElementById('root')
        );
    
    return (
        <div>
            
        </div>
    );
}



export default Timer;