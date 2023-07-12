
import React, { useState } from 'react';
import './Task1.css'; // Create a CSS file for styling (Task1.css)

function Task1({circles, setCircles}) {
  console.log(circles)
    const [circleColor, setCircleColor] = useState('yellow');

    
    const increaseCounter = (circleId) => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => {
          if (circle.id === circleId) {
            const newCounter = circle.counter + 1;
            const newColor = getRandomColor();
            return { ...circle, counter: newCounter, color: newColor };
          }
          return circle;
        })
      );
    };
  
    const duplicateCircle = () => {
      if (circles.length < 10) {
        const newCircleId = circles.length + 1;
        const newCircle = { id: newCircleId, counter: 0, color: 'yellow' };
        setCircles((prevCircles) => [...prevCircles, newCircle]);
      }
    };
  
    const getRandomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    };
  
    return (
      <div className="task1-container">
        {circles.map((circle) => (
          <div key={circle.id} className="circle" style={{ background: circle.color }}>
            <div className="counter">{circle.counter}</div>
            <div className="color-label">{circle.color}</div>
            <button onClick={() => increaseCounter(circle.id)}>Button 1</button>
          </div>
        ))}
        <div className="buttons">
          <button onClick={duplicateCircle}>Button 2</button>
        </div>
      </div>
    );
  }
  

export default Task1

