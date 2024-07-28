import { useState, useEffect, useRef } from 'react'

import birdLogo from '/Tree2.webp'
import './App.css'
import Dropdown from './Dropdown.jsx'


function App() {


  //sets dropdown hidden
  const [isHidden, setHidden] = useState(true);
  //gives style for dropdown position
  const [position, setPosition] = useState({})
  const refImage = useRef(null)
  //coordinates
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

    const ToggleClass = () => {
        setHidden(false);
       
    };
    const handleClickOutside = (e) => {
      if(!refImage.current.contains(e.target)){
        setHidden(true);
      }
      
    };
    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true)
    }, [])
    useEffect(() => {
      async function getTime() {
        const response = await fetch('http://localhost:3000/time', {mode: 'cors'});
        const data = await response.json();
        console.log(data);
      }
    }, [])
    async function checkClick(target) {
      const response = await fetch(`http://localhost:3000/click?x=${X}&y=${Y}&target=${target}.json`, {mode: 'cors'});
      const data = await response.json();
      console.log(data);
    }

  const handleClick = (event) => {
    searchBird(event)
    ToggleClass()
  }
  const setCoordinates = (x,y) => {
    // You don't need whitespace in here, I added it for readability
    // I would recommend using something like EmotionJS for this
    setX(x);
    setY(y)    
    setPosition({
          position: 'absolute',
          left: `${x-12.5}px`,
          top: `${y-12.5}px`
    })
  }
  // logs x and y
  const logLocation = (event) => {
    let bird = event.target
    let rect = bird.getBoundingClientRect()
    let x = (event.clientX - rect.left) / rect.width * 100;
    // actual position - offset / width_image * 100
    let y = (event.clientY - rect.top) / rect.height * 100;

    setCoordinates(x, y)
    console.log("X Coordinate: " + x + " Y Coordinate: " + y);
  }
  const searchBird = (event) => {
    
    
    logLocation(event)
  }

  return (
    <>
      <div>
        
        <img onClick={handleClick} src={birdLogo} className="logo" alt="Vite logo" ref = {refImage} />
        <Dropdown hidden = {isHidden} position = {position} validation = {checkClick} />
      </div>
    </>
  )
}

export default App
