import React, { useState, useEffect } from 'react';
import './Overlay.css'; // Import CSS file

const Overlay = () => {
  const [isActive, setIsActive] = useState(true); // Initially set to true

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false); // Set isActive to false after 3 seconds
    }, 3000); // Change the timeout to 3000 milliseconds (3 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="overlay" className={isActive ? 'active' : ''}>
      <p id="text">A long time ago in a galaxy far, far away...</p>
    </div>
  );
};

export default Overlay;
