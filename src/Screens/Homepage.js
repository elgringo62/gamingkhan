import React from 'react';
import MainScreen from './MainScreen';
import Header from '../Components/Header';
import Profile from '../Components/Profile';
import Chatroom from './Chatroom';
import './Homepage.css'

export default function Homepage() {
  return (
    <div className='Home1'>
        <Profile/>
        <MainScreen/>
        <Chatroom/>
    </div>
  )
};
