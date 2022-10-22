
import './App.css'
import spaceship from './assets/Galaga_Fighter.png'
import missile from './assets/1200px-M-20_missile.svg.png'

import "./App.css";
import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";
import Countdown from 'react-countdown';
import ReactDOM from 'react-dom';




export default function App() {
  const [movement, setMovement] = useState('2px solid black')

  // image that holds image true or false

  // if space -> make the use effect 
  // get spaceship margin location to render the laser



  

  // function handleKeyPress(e) {
  //   var key = e.key;
  //   console.log("You pressed a key: " + key);
  //   if (key == 37) {
  //     console.log("you clicked left")
  //   }
  //   else if (key == 39) {
  //     console.log("you clicked right")
  //   }
  // }
  const handleKeyDown = (event) => {
    console.log('User pressed: ', event.key)
  }


  const [marginLeft, setMarginLeft] = useState(0);
  useEffect(() => {
    function handleKeyDown(e) {
      console.log(e.keyCode);
      //Left Arrow Key
      if (e.keyCode === 37) {
        console.log("Left");
        if (marginLeft > 0) {
          setMarginLeft(marginLeft - 75);
        } else {
          setMarginLeft(0);
        }
        //Right Arrow Key
      } else if (e.keyCode === 39) {
        console.log("Right");
        if (marginLeft < window.outerWidth - 75) {
          setMarginLeft(marginLeft + 75);
        } else {
          const value = window.outerWidth - 75;
          setMarginLeft(value);
        }
      }
      // Spacebar
      if (e.keyCode === 32) {
        console.log("Spacebar!");
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [marginLeft]);
  console.log(marginLeft);
  console.log(window.innerWidth);



  

  // ReactDOM.render(
  //   <Countdown date={Date.now() + 10000} />,
  //   document.getElementById('animatedBackground')
  //   );

  return (
    

      

      <div className="App" id="animatedBackground">
        
        <div tabIndex={0} onKeyDown={handleKeyDown}>
          <img src={spaceship} />

      <div className="App" id="animatedBackground">
        <div>
          
          <Timer />
          <img className='missileImage' src={missile} />
          <img
            id='spaceshipdiv'
            alt="Spaceship"
            src={spaceship}
            style={{
              marginLeft: marginLeft,
              width: 75,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "white",
              marginTop: window.outerHeight / 2,
            }}
          />

        </div>
      </div>
    </div>
    </div>

  );
}
