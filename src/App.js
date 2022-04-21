import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("loading...");

  function getTime() {
    let timeString = "";
    const time = new Date();
    let hours =
      time.getHours() >= 20 ? time.getHours() - 20 : time.getHours() + 4;
    let minutes = time.getMinutes();
    if (minutes >= 30) {
      hours++;
      hours = hours >= 24 ? hours - 24 : hours;
      minutes = minutes - 30;
    } else {
      minutes += 30;
      hours = hours >= 24 ? hours - 24 : hours;
    }
    timeString = hours + " : " + (minutes < 10 ? "0" : "") + minutes;
    setTime(timeString);
  }

  useEffect(() => {
    console.log("init");
    getTime();
  }, []);

  setInterval(() => {
    getTime();
  }, 59000);

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
