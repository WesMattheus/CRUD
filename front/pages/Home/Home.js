import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import NavBar from '../../components/NavBar/NavBar';
import './Home.css'
import { Toaster } from 'react-hot-toast';

function Home() {

    return (
        <div className='home-container'>
            <NavBar/>
            <RegisterForm/>
            <Toaster position='top-right'/>
        </div>

    );
}




export default Home;