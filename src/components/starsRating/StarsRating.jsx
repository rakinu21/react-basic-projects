import React, { useState } from 'react'
import { LiaStarSolid } from "react-icons/lia";
import './style.css'

const StarsRating = ({noOfStars = 10}) => {
  
  const [rating, setRating] = useState(0);
  const [hover , setHover] = useState(0)

  const handleOnclick = (getCurrentId)=>{
     
      setRating(getCurrentId)
  }

  const handlemouseMove = (getCurrentId)=>{
    
       setHover(getCurrentId)
  }

  const handleMouseLeave = ()=>{
        setHover(rating)

  }

  return (
    <div id='stars'>
       {
        [...Array(noOfStars)].map((stars, index)=>{
           index += 1
          return (
            <LiaStarSolid
             key={index}
              onClick={()=> handleOnclick(index)}
             onMouseMove={()=> handlemouseMove(index)}
               onMouseLeave={()=> handleMouseLeave()}
             size={50}
             className={index <= (hover || rating) ? 'active' : 'inactive'}
            />
          )
        })
        
        }
       
    </div>
  )
}

export default StarsRating