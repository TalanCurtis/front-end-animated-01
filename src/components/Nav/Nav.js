import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component{
    constructor(){
        super()
        this.state={
            isLoading: false
        }
    }
    render(){
        return(
            <div className="Nav"> Nav Comp
                <Link to='/'>Page 1</Link>    
                <Link to='/Page2'>Page 2</Link> 
                <div>is loading {JSON.stringify(this.state.isLoading)}</div>   
            </div>
            
        )
    }
}

export default Nav;