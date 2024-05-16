import React from 'react'
import './Dashboard.css'
import NavBar from '../NavBar/NavBar';
import Alert from '../Alert/Alert';

export const Dashboard = () => {
  return (
    <div className='container'>
        
        <NavBar/>
        <Alert/>
    </div>
  )
}
export default Dashboard;