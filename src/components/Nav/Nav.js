import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <div className="Nav">
                <div className='section1'>
                <Link to='/'>Page 1</Link>    
                </div>
                <div className='section2'>
                <Link to='/Page2'>Page 2</Link> 
                </div>
                <div className='section3'>
                <Link to='/Page2'>Page 3</Link> 
                </div>
                <div className='section4'>
                <Link to='/Page2'>Page 4</Link> 
                </div>
            </div>
        )
    }
}

export default Nav;