import "./App.css";
import spaceship from "./assets/Galaga_Fighter.png";
import React, { useEffect } from "react";

export default (App) => {
  useEffect(() => {
    function handleKeyDown(e) {
      console.log(e.keyCode);
      if (e.keyCode == 37) {
        console.log("1");
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="">
      <div tabIndex={0} onKeyDown={handleKeyDown}>
        <img src={spaceship} />
      </div>

      <div className="App" id="animatedBackground"></div>
    </div>
  );
};
