import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './googleAuth';

const Header = () => {
    return(
        <div className='ui secondary pointing manu'>
            <Link to='/' className= 'item'>
                Streamy
            </Link>
            <div className='right menu'>
                <Link to='/' className='item'>
                    All streams
                </Link>
                <GoogleAuth/>
            </div>
        </div>
    );
};

export default Header;