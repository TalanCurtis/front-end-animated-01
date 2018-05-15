import React, {Component} from 'react';
import {Link} from 'react-router-dom';

function Nav(props) {
    console.log('props', props)
    return (
        <div className="Nav">
            <div className='section1' >
                <Link to='/' onClick={props.handleNavMenu}>Page 1</Link>
            </div>
            <div className='section2'>
                <Link to='/Page2' onClick={props.handleNavMenu}>Page 2</Link>
            </div>
            <div className='section3'>
                <Link to='/Page2' onClick={props.handleNavMenu} >Page 3</Link>
            </div>
            <div className='section4'>
                <Link to='/Page2' onClick={props.handleNavMenu} >Page 4</Link>
            </div>
        </div>
    )
}

export default Nav;