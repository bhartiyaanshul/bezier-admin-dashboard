import React from 'react'
import style from './Sidebar.module.css'

export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
        <img src='images/logo.png' alt='' className={style.logo}/>
        <div className={style.menu}>
            <div className={style.menuitem}><img src='images/sidebarIcons/category.png'/>Dashboard</div>
            <div className={style.menuitem}><img src='images/sidebarIcons/profile.png'/>Artists</div>
            <div className={style.menuitem}><img src='images/sidebarIcons/gallery.png'/>Projects</div>
            <div className={style.menuitem}><img src='images/sidebarIcons/receipt-2.png'/>Sales</div>
        </div>
        <div className={style.userControl}>
            <div className={style.controlItem}><img src='images/sidebarIcons/setting-2.png'/>Settings</div>
            <div className={style.controlItem}><img src='images/sidebarIcons/logout.png'/>Logout</div>
        </div>
    </div>
  )
}
