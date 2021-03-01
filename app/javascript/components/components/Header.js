import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

import apt1 from '../asssets/images/apt1.jpg'


class Header extends Component {
    render() {
        return (
            <>
             
            <h1>Apartment App header</h1>

            <div className="top-nav">
                <ul className='ul-header'>
                    {/* <li> {apt1} </li> */}
                    {/* <a href="https://www.vecteezy.com/free-vector/real-estate-logo"></a> */}
                    <img className='header-house' src ={ apt1} />
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/aptindex">Apt Listings</NavLink></li>
                    {/* <li><NavLink to="/myapartments">My Apts</NavLink></li> */}
                    <li><NavLink to="/apartmentnew">Add Apt</NavLink></li>
                </ul>
            </div>
    

            </>
        );
    }
}

export default Header;