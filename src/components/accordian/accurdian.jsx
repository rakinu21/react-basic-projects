


import React, { useState } from 'react'
import data from './index.js'
import './style.css'

export const Accurdian = () => {

 
  const [toggleBtn , setToggleBtn] = useState(false)
  const [itemSelect, setItemSelect] = useState(null);
  
  const [multiSelect, setMultiselect] = useState([]);



  const handleSingleSelect = (getCurrentId)=> {

    setItemSelect(itemSelect === getCurrentId ? null : getCurrentId)
  }
 
 const handleMultipleSelection = ( getCurrentId) =>{


   let copyMultiple = [...multiSelect];

   const NumberOfIndex = copyMultiple.indexOf(getCurrentId);


   if(NumberOfIndex === -1) copyMultiple.push(getCurrentId)
    else copyMultiple.splice(NumberOfIndex , 1);

   setMultiselect(copyMultiple);

   console.log(NumberOfIndex);
 }

  
  return (
    <div className='wrapper'>
      

      <button className="btntoggle" onClick={()=> setToggleBtn( ! toggleBtn)}>{toggleBtn ? 'disable multi-select': 'unable multi-select'}</button>


      {/* add data  */}

       <div className="accordian">

          {
            data && data.length > 0 ? 

            data.map((item)=>{

              return (

                <div className="title" key={item.id} onClick={()=> toggleBtn ? handleMultipleSelection(item.id) : handleSingleSelect(item.id)}>

                    <h3>{item.question}</h3>
                    <span>{itemSelect === item.id ? '-' :'+'}</span>


                    {toggleBtn ? 
                     
                     multiSelect.indexOf(item.id) !== -1 && <div className="answer">{item.answer}</div> :

                     itemSelect === item.id && <div className="answer">{item.answer}</div>
                  }

              
                </div>
              )
            }) : <p>no data found</p>
          }
       </div>
    
    </div>
  )
}

