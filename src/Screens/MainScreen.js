import React from 'react';
import './MainScreen.css'

function MainScreen() {
  return (
    <div className='Container'>
        <div className='Title'>
            <h1> GAMING </h1>
            <h1 id='title2'> KHAN </h1>
        </div>

        <div className='Tabs'>
                <div className='Find'>
                    <p1>FIND A MATCH</p1>
                </div>
                <div className='Find2'>
                    <p1>MY MATCHES </p1>
                </div>
            </div>
    </div>
  )
};

export default MainScreen;