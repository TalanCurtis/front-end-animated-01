import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BurgerSVG from '../../images/Burger_svg';
import LogoSVG from '../../images/Logo_svg';
import {TweenLite, TweenMax ,  Power4} from 'gsap';
import Nav from '../Nav/Nav';

class Header extends Component{
    constructor(){
        super()
        this.state={
            isOpen: false
        }
    }

    handleNavMenu(){
        if(!this.state.isOpen){
            TweenLite.set('.Nav',{visibility: 'visible'})
            TweenMax.staggerTo('.Nav .navSect', .75, {x:'100%', ease:Power4.easeOut}, .2)
            TweenLite.to('#top ,#bot', .5, {opacity:0})
            TweenLite.to('#mid', .5, {transformOrigin:"center", rotation:45})
            TweenLite.to('#mid-part2', .5, {transformOrigin:"center", rotation:-45})
        }else{
            TweenMax.to('.Nav .navSect', 1.1, {x:'0%'})            
            TweenLite.to('#top ,#bot', .5, {opacity:1})
            TweenLite.to('#mid', .5, {transformOrigin:"center", rotation:0})
            TweenLite.to('#mid-part2', .5, {transformOrigin:"center", rotation:0})
        }
        this.setState({isOpen:!this.state.isOpen})
    }

    render(){
        return(
            <div className="Header"> 
                <Link to='/' ><LogoSVG className='Logo_svg' height='40px' width='150px' fill='white'/></Link>
                <BurgerSVG className='Burger_svg' height='32px' width='32px' fill='white'  onClick={()=>this.handleNavMenu()}/>
                <Nav handleNavMenu={()=>this.handleNavMenu()}/>
            </div>
        )
    }
}

export default Header;