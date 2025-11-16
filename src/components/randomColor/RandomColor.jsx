

import './style.css'
import React, { useEffect, useState } from 'react'

export const RandomColor = () => {

  const [typeColor , setTypeColor] = useState('hex');
  const [color ,setColor] = useState('#131313')


  const handleHexaColor = ()=>{

        let hex = '#'
    const hexeValue = [ '0','1','2' , '3','4','5','6','7','8','9','A','B','C','D','E','F'];
   
    for( let index = 0 ; index < 6 ; index ++){

       const randomColor  = hexeValue[Math.floor(Math.random() * hexeValue.length)];

     

       hex += randomColor;
    }

    console.log(hex)

    setColor(hex)

  }

  const handleRGB = ()=>{

        const red = Math.floor(Math.random() * 255);
     const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);

     const valuergb = `rgb(${red}, ${green}, ${blue})`;

     console.log(valuergb)
     setColor(valuergb)

  }

  useEffect(()=>{
    typeColor === 'hex' ? handleHexaColor() : handleRGB()
  },[typeColor])
  return (
    <div className='colorbg' style={{background : color}}>

      <div className="button">
         <button className="rgb" onClick={()=> setTypeColor('rbg')}>rbg color</button>
         <button className="hex" onClick={()=> setTypeColor('hex')}>hex color</button>
         <button className="random" onClick={()=> typeColor === 'hex'? handleHexaColor(): handleRGB()}>random</button>
      </div>

      <div className="text">
        <h1>{typeColor === 'hex'? 'Hexa color' : 'rgb color'}</h1>
        <p>{color}</p>
      </div>
    </div>
  )
}

