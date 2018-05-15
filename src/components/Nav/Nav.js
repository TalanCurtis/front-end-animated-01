import React from 'react';
import {Link} from 'react-router-dom';

function Nav(props) {
    return (
        <div className="Nav">
            <Link to='/' className='section1 navSect' onClick={props.handleNavMenu}>Page 1</Link>
            <Link to='/Page2' className='section2 navSect' onClick={props.handleNavMenu}>Page 2</Link>
            <Link to='/Page2' className='section3 navSect' onClick={props.handleNavMenu}>Page 3</Link>
            <Link to='/Page2' className='section4 navSect' onClick={props.handleNavMenu}>Page 4</Link>
        </div>
    )
}

export default Nav;