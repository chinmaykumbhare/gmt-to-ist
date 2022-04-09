import logo from "./logo.svg";
import {useState} from "react";
import "./App.css";

function App() {

  const [time, setTime] = useState("");

  function getTime() {
    let timeString = "";
    const time = new Date();
    timeString = (time.getHours() + 4) > 24 ? time.getHours() + 4 - 24 : time.getHours() + 4;
    timeString += " : ";
    timeString += (time.getMinutes() + 30) > 60 ? time.getMinutes() + 30 - 60 : time.getMinutes() + 30;
    // console.log(timeString);
    setTime(timeString);
  }

  setInterval((() => {
    getTime();
  }), 1000);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{time}</h1>
      </header>
    </div>
  );
}

export default App;
