import logo from './logo.svg';
import './App.css';
import spaceship from './assets/Galaga_Fighter.png'
import { useState } from 'react';
function App() {

  const [movement, setMovement] = useState("2px solid black");
    function handleKeyPress(e) {
        var key = e.key;
        console.log( "You pressed a key: " + key );
        if (key == 37) {
           console.log("you clicked left")
        }
        else if (key == 39) {
            console.log("you clicked right")
        }
    }

  return (
    <div className="">
      <img onKeyDown={handleKeyPress} src={spaceship}/>

    </div>
  );
}

export default App;
