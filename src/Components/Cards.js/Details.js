import React from 'react';
import {MdKeyboardArrowRight} from 'react-icons/md';
import './Details.css';

function Details(props) {
  return (
    <div className='Detail-container'>
             <p1> 
              {props.Title}
            </p1>
           <MdKeyboardArrowRight color='#fff'/>
        </div>
  )
}

export default Details;