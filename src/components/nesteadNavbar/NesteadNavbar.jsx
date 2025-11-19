import React from 'react'
import { Menulist } from './menulist'
import './style.css'
export const NesteadNavbar = ({menus = []}) => {
  return (
    <div className='tree-view-container'>

        <Menulist list={menus}/>
    </div>
  )
}
