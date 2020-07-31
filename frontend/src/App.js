import React from "react";
import UserDashBoard from "./user/UserDashBoard.js";
import "./styles.css";
import Calender from "./user/cal.js";

function App() {
  return (
    <div className="App">
      <Calender />
      <UserDashBoard />
    </div>
  );
}

export default App;
