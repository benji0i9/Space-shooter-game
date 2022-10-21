import './App.css'
import spaceship from './assets/Galaga_Fighter.png'
import { useState } from 'react'
function App() {
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

  return (
    <div className="">
      

      <div className="App" id="animatedBackground">
        <div tabIndex={0} onKeyDown={handleKeyDown}>
          <img src={spaceship} />
        </div>
      </div>
    </div>
  )
}

export default App
