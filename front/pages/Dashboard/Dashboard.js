import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import UserTable from '../../components/UserTable/UserTable';
import './Dashboard.css'

function Dashboard() {

    return (
        <div className='dashboard-container'>
            <NavBar/>
            <UserTable className="texti"/>
        </div>

    );
}




export default Dashboard;