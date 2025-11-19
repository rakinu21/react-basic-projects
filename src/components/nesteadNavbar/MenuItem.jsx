import React, { useState } from 'react'
import { Menulist } from './menulist'

export const MenuItem = ({item}) => {

    const[displayCurrentChildren, setdisplayCurrentChildren] = useState({});


    const handleShowChild = (getcurrentLevel)=> {
       
        setdisplayCurrentChildren({
            ...displayCurrentChildren , [getcurrentLevel] : !displayCurrentChildren[getcurrentLevel]
        })
    }


    console.log(displayCurrentChildren)


  return (
    <li>

       <div style={{display: 'flex', gap:'20px'}}>
         <p>{item.label}</p>

         {item && item.children && item.children.length ?  <span onClick={()=> handleShowChild(item.label)}>{displayCurrentChildren[item.label]=== true ? '-': '+'}</span>: null}
       </div>

        {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?

            <Menulist list={item.children}/>
            :null
        }
    </li>
  )
}
