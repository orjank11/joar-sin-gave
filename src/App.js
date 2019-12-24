import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App">
      <div className="backDoor">
        <div className="bowtie" />
        <div
          onClick={() => setOpen(!isOpen)}
          className={`door ${isOpen ? "doorOpen" : ""}`}
        ></div>
        <div
          onClick={() => setOpen(!isOpen)}
          className={`secondDoor ${isOpen ? "secondDoorOpen" : ""}`}
        ></div>
        <div className="giftDetails">
          <p>
            I år får du et gavekort på å reise til Oslo når du vil. No question
            asked.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
