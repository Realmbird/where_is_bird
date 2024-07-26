import { useState, useEffect, useRef } from 'react'

import birdLogo from '/Tree1.webp'
import './App.css'
import Dropdown from './Dropdown.jsx'


function App() {
  //sets dropdown hidden
  const [isHidden, setHidden] = useState(true);
  //gives style for dropdown position
  const [position, setPosition] = useState({})
  const refImage = useRef(null)

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

  const handleClick = (event) => {
    searchBird(event)
    ToggleClass()
  }
  const setCoordinates = (x,y) => {
    // You don't need whitespace in here, I added it for readability
    // I would recommend using something like EmotionJS for this
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
    let x = (event.pageX - rect.left) / rect.width * 100;
    // actual position - offset / width_image * 100
    let y = (event.pageY - rect.top) / rect.height * 100;

    setCoordinates(event.pageX, event.pageY)
    console.log(x)
    console.log(y)
    alert("X Coordinate: " + x + " Y Coordinate: " + y);
  }
  const searchBird = (event) => {
    
    
    logLocation(event)
  }

  return (
    <>
      <div>
        
        <img onClick={handleClick} src={birdLogo} className="logo" alt="Vite logo" ref = {refImage} />
        <Dropdown hidden = {isHidden} position = {position}/>
      </div>
    </>
  )
}

export default App
