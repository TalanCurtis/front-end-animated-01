import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Burger_svg from '../../images/Burger_svg';
import Logo_svg from '../../images/Logo_svg';
import {TweenLite} from 'gsap';

class Header extends Component{
    constructor(){
        super()
        this.state={
            isOpen: false
        }
    }

    handleNavMenu(){
        console.log('nav menu')
        if(this.state.isOpen){
            TweenLite.to('.Nav', 1, {y:'0%'})
        }else{
            TweenLite.to('.Nav', 1, {y:'-100%'})
        }
        this.setState({isOpen:!this.state.isOpen})
    }
    render(){
        return(
            <div className="Header"> 
                <Logo_svg className='Logo_svg' height='40px' width='150px' fill='white'/>
                <Burger_svg className='Burger_svg' height='32px' width='32px' fill='white'  onClick={()=>this.handleNavMenu()}/>
            </div>
        )
    }
}

export default Header;