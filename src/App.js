import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [circle, setCircle] = useState({
    xPosition: null,
    yPosition: null,
    // colors: ["red", "green", "blue", "yellow", "white", "purple", "black", "orange", "slate"],
    color: "yellow"
  });
  const [circleHistory, setCircleHistory] = useState([]);
  // const [circleIndex, setCircleIndex] = useState(0);

  const handleAddCircle = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    console.log(x);
    console.log(y);
    setCircle({ xPosition: x, yPosition: y, colors: "yellow"  });
    setCircleHistory([...circleHistory, { xPosition: x, yPosition: y, }]);
  }
  const undo = () => {
    setCircleHistory(circleHistory.pop());
    console.log(circleHistory)
  };

  const redo = () => {
    setCircleHistory(circleHistory.push(circle))
    console.log(circleHistory)
  };

  return (
    <div className="App">
      <div className="app-container" onClick={handleAddCircle}>
        <button onClick={undo}>undo</button>
        <button onClick={redo}>redo</button>
      </div>
      {circle && (
        <div
          style={{
            position: "absolute",
            top: circle.yPosition,
            left: circle.xPosition,
            backgroundColor: 'yellow'
          }}
          className="circle"
        ></div>
      )}
    </div>
  );
}

export default App;
