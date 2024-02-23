import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import styles from "./App.module.css";
import icon from "./img/icon.png";
import Planets from "./components/planets";
import Overlay from './components/Overlay'; // Import Overlay component

function App() {
  const [shrinkTitle, setShrinkTitle] = useState(false);
  const [on, setOn] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const timeToShrink = 5000;
  useEffect(() => {
    const timer = setTimeout(() => {
      setShrinkTitle(true);
    }, timeToShrink);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOn(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldScrolling = scrollTop > 0;

      if (shouldScrolling !== scrolling) {
        setScrolling(shouldScrolling);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  // Function to get a random image source
  const getRandomImageSource = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3
    return `../img/warrior${randomNumber}.jpg`; // Construct the complete file path of the image
  };
  

  return (
    <>
      {on && (
        <main className={styles.container}>
          <div className={styles.textOverlay}>
            <ReactTyped
              className={styles.title}
              strings={["STAR  WARS PLANETS DETAILS"]}
              typeSpeed={155}
            />
          </div>
        </main>
      )}
      {!on && (
        <>
        <div
          style={{
            backgroundSize: "contain",
            minHeight: "100vh",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="flex items-center justify-center">
            <div className="mt-24 flex sm:flex-wrap items-center justify-center p-2 gap-8 ">
              <div style={{ position: "relative" }}> {/* Add position:relative to create a stacking context */}
                <img className={`w-100 rounded-xl fade-in ${isLoaded ? "loaded" : ""}`} src={icon} />
                <div style={{ position: "absolute", top: 0, left: 0 }}> {/* Position the Overlay absolutely */}
                  <Overlay /> {/* Render the Overlay component */}
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px mt-24 my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        <Planets getRandomImageSource={getRandomImageSource} /> {/* Pass the getRandomImageSource function as a prop */}
      </>
      )}
    </>
  );
}

export default App;
