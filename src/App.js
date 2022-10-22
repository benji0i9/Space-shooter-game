import "./App.css";
import spaceship from "./assets/Galaga_Fighter.png";
import React, { useEffect, useState } from "react";

export default (App) => {
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
  return (
    <div className="">
      <div className="App" id="animatedBackground">
        <div>
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
            }}
          />
        </div>
      </div>
    </div>
  );
};
