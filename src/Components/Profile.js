import React from 'react';
import './Profile.css';
import Details from './Cards.js/Details';
import {MdSupportAgent} from 'react-icons/md'

export default function Profile() {
  return (
    <div className='Profile-container'>
    <div className='Top'>
        <div>
            <MdSupportAgent color='#fff' size={60}/>
        </div>
        <div>
            <h3 id='name1'>
                KithBilly
            </h3>
            <h3 id='name2'>
                View Profile
            </h3>
            <div className='Bottom'>
            </div>
        </div>
    </div>
    <div className='Balance'>
    <p1>
        Total Balance
    </p1>
    <h1>
        $0.01
    </h1>
    <p2>
        $0.10 available
    </p2>
    </div>
    <div className='Scroll1'>
        <Details Title = "Theme Light/Dark"/>
        <div className='Titles'>
            <p2>
                Support
            </p2>
        </div>
        <Details Title = "Site Tour"/>
        <Details Title = "Contact Support"/>
        <Details Title = "How it works"/>
        <Details Title = "FAQs"/>
        <Details Title = "Site Rules"/>
        <Details Title = "Record Your games"/>
        <div className='Titles'>
            <p2>
                Account
            </p2>
        </div>
        <Details Title = "Go premium"/>
        <Details Title = "Preferred Games"/>
        <Details Title = "Watched Games"/>
        <Details Title = "Edit Profile"/>
        <Details Title = "Edit Account"/>
        <Details Title = "Edit Password"/>
        <Details Title = "Change Username"/>
        <div className='Titles'>
            <p2>
                Misc
            </p2>
        </div>
        <Details Title = "Rewards"/>
        <Details Title = "Offers"/>
        <Details Title = "Refer a friend"/>
        <Details Title = "Redeem Promo"/>
        <Details Title = "Feedback"/>
        <Details Title = "Logout"/>
        <div className='Titles'>
            <p2>
                Policies
            </p2>
        </div>
        <Details Title = "Terms"/>
        <Details Title = "Privacy"/>
        <Details Title = "Cookies"/>
        <div className='Titles'>
            <p2>
                Revert Back
            </p2>
        </div>
        <Details Title = "Legal site"/>
        </div>
    </div>
  );
};
