import "./App.css";
import Timer from './components/Timer'
import SpaceShip from "./components/SpaceShip";

export default (App) => {
  return (
    <div className="">
      <div className="App" id="animatedBackground">
        <div>
          <Timer />
          <SpaceShip />
        </div>
      </div>
    </div>
  );
};
