import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Burger_svg from '../../images/Burger_svg';
import Logo_svg from '../../images/Logo_svg';
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
        console.log('nav menu')
        if(!this.state.isOpen){
            TweenMax.staggerTo('.Nav div', .75, {y:'100%', ease:Power4.easeOut}, .2)
            TweenLite.to('#top ,#bot', .5, {opacity:0})
            TweenLite.to('#mid', .5, {transformOrigin:"center", rotation:45})
            TweenLite.to('#mid-part2', .5, {transformOrigin:"center", rotation:-45})
        }else{
            TweenMax.to('.Nav div', .5, {y:'0%'})            
            TweenLite.to('#top ,#bot', .5, {opacity:1})
            TweenLite.to('#mid', .5, {transformOrigin:"center", rotation:0})
            TweenLite.to('#mid-part2', .5, {transformOrigin:"center", rotation:0})
        }
        this.setState({isOpen:!this.state.isOpen})
    }

    render(){
        return(
            <div className="Header"> 
                <Logo_svg className='Logo_svg' height='40px' width='150px' fill='white'/>
                <Burger_svg className='Burger_svg' height='32px' width='32px' fill='white'  onClick={()=>this.handleNavMenu()}/>
                <Nav/>
            </div>
        )
    }
}

export default Header;