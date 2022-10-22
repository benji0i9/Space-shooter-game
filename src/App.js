
import './App.css'
import spaceship from './assets/Galaga_Fighter.png'
import "./App.css";
import React, { useEffect, useState } from "react";



export default function App() {
  const [movement, setMovement] = useState('2px solid black')

  

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
      if (e.keyCode == 37) {
        console.log("1");
      } else if (e.keyCode == 39) {
        console.log("Right");
        if (marginLeft < window.outerWidth - 75) {
          setMarginLeft(marginLeft + 75);
        } else {
          const value = window.outerWidth - 75;
          setMarginLeft(value);
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [marginLeft]);
  console.log(window.innerWidth);


  
  return (
    

      

      <div className="App" id="animatedBackground">
        <div tabIndex={0} onKeyDown={handleKeyDown}>
          <img src={spaceship} />

      <div className="App" id="animatedBackground">
        <div>
          <img
            src={spaceship}
            style={{
              marginLeft: marginLeft,
              width: 75,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "white",
            }}
          />

        </div>
      </div>
    </div>
    </div>

  );
}
