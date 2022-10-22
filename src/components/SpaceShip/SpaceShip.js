import spaceship from '../../assets/spaceship.png'
import missile from '../../assets/missile.png'
import React, { useEffect, useState } from "react";
import ReactDOM  from 'react-dom';

function SpaceShip() {
    const [marginLeft, setMarginLeft] = useState(0);
    useEffect(() => {
      let img = new Image();
      function handleKeyDown(e) {
        console.log(e.keyCode);
        //Left Arrow Key
        if (e.keyCode === 32) {
          console.log("Spacebar!");
          img.src = missile;
          img.classList.add('missileImage')
          img.width = 50;
          img.height = 50;
          img.marginLeft = marginLeft;
          document.getElementById("Body").appendChild(img);
        }
        else if (e.keyCode === 37) {
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
  
        }


  
  
      document.addEventListener("keydown", handleKeyDown);
  
      // Don't forget to clean up
      return function cleanup() {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [marginLeft]);
    console.log(marginLeft);
    console.log(window.innerWidth);
return(
    <div id='Body'>
        <img
            alt="Spaceship"
            src={spaceship}
            style={{
              marginLeft: marginLeft,
              width: 75,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "white",
              marginTop: window.outerHeight / 2,
              flex: 1,
            }}
          />
    </div>
)
}

export default SpaceShip;