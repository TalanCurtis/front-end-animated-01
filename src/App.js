import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import './styles/main.css';
import Page1 from './views/Page1/Page1';
import Page2 from './views/Page2/Page2';
import PageLocker from './components/PageLocker/PageLocker';
import Nav from './components/Nav/Nav';
// import $ from 'jquery';
import {TweenLite} from 'gsap';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class App extends Component {
  constructor(){
    super();
    this.state={
      isPageLocked: true
    }
  }

  pageUnlock(){
    console.log('Unlock Page')
    // this.setState({isPageLocked:false})
    //visibility:"hidden", 
    TweenLite.to('.PageLocker', 1, {x:"100%"})
    // TweenLite.to('.content', .5, {opacity:1})
  }
  pageLock(){
    console.log('Lock Page')
    // this.setState({isPageLocked:true})
    //visibility:"hidden", 
    TweenLite.to('.PageLocker', 1, {x:"0%"})
    // TweenLite.set('.content', {opacity:0})
    
  }


  render() {
    return (
      <div className="App">
        <Nav/>
        <button onClick={()=>console.log(this.props)}>Props</button>
        <PageLocker/>
        <div className='content'>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} timeout={1000}
          classNames="fade">
          <Switch location={this.props.location}>
            {/* <Route exact path='/' component={Page1} testProp='hello'/> */}
            <Route exact path='/' render={()=>(<Page1 pageUnlock={()=>this.pageUnlock()} pageLock={()=>this.pageLock()}/>)}/>
            <Route path='/Page2' render={()=>(<Page2 pageUnlock={()=>this.pageUnlock()} pageLock={()=>this.pageLock()}/>)}/>
          </Switch>
          </CSSTransition>
        </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
