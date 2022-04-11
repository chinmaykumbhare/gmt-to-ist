import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("loading...");

  function getTime() {
    let timeString = "";
    const time = new Date();
    timeString =
      time.getHours() + 5 > 24 ? time.getHours() + 5 - 24 : time.getHours() + 5;
    timeString += " : ";
    timeString += time.getMinutes() >= 30 && time.getMinutes() < 40 ? "0" : "";
    timeString +=
      time.getMinutes() + 30 > 60
        ? time.getMinutes() + 30 - 60
        : time.getMinutes() + 30;
    // console.log(timeString);
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
