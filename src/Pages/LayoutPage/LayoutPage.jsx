import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import './LayoutPage.css'

const LayoutPage = () => {
  return (
    <div className='Layout-container'><SideBar/><div className='o-container'><Outlet/></div></div>
  )
}

export default LayoutPage