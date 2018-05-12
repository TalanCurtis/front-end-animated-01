import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './styles/main.css';
import Page1 from './views/Page1/Page1';
import Page2 from './views/Page2/Page2';
import PageLocker from './components/PageLocker/PageLocker';
import Nav from './components/Nav/Nav';
import $ from 'jquery';

class App extends Component {
  constructor(){
    super();
    this.state={
      isPageLocked: true
    }
  }

  pageLock(){
    console.log('Unlock Page')
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        {this.state.isPageLocked?<PageLocker/>: null}
        <div className='content'>
          <Switch>
            {/* <Route exact path='/' component={Page1} testProp='hello'/> */}
            <Route exact path='/' render={()=>(<Page1 testProps={()=>this.pageLock()}/>)}/>
            <Route path='/Page2' component={Page2}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
