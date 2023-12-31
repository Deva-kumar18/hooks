import React from 'react'
import { SideBarData } from '../../constants/SideBarData'
import { NavLink, Outlet } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar-container'>
        <ul className='sidebar-list'>{SideBarData.map((val, key)=>(
         <NavLink key={key} to={val.link}> <li className='s-data-list' key={key}><div key={key} className='s-data'>{val.title}</div></li></NavLink>
        ))}</ul>
    </div>
  )
}

export default SideBar