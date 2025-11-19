

import React from 'react'
import { MenuItem } from './MenuItem'

export const Menulist = ({list= []}) => {
  return (
    <ul className='menu-list'>

      {
        list && list.length > 0 ?
        
        list.map((listItem)=>{

          return <MenuItem item={listItem}/>
        })
        : null
      }
    </ul>
  )
}
