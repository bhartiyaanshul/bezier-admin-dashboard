import React from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import style from './AdminDashboard.module.css'

export const AdminDashboard = () => {
  return (
    <div className={style.adminDashboard}>
        <Sidebar />
        <div></div>
    </div>
  )
}
