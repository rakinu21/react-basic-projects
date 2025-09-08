import React, { useState } from 'react'
import { LiaStarSolid } from "react-icons/lia";
import './style.css'

const StarsRating = ({noOfStars = 10}) => {

    const [rating,setRating] = useState(0);
    const [hover, setHover] = useState(0)


  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(0);
  }

  return (
    <div id='stars'>
      {
        [...Array(noOfStars)].map((items, index)=>{
            index +=1
            return <LiaStarSolid 
                    key={index}
                     className={index <= (hover || rating) ? "star active" : "star"}
                    onClick={()=> handleClick(index)}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={() =>handleMouseEnter(index)}
                    size={40}/>
        })
      }
    </div>
  )
}

export default StarsRating