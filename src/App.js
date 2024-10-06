import { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Features from './components/Features';
import './App.css';

class App extends Component {
  render(){
    return (
      <>
       <Switch>
            <Route exact path="/login"  component={Login} />
            <Route exact path='/' component={Home}/>
            <Route exact path='/features' component={Features}/>
        </Switch>
      

      </>
     
         
      
    );
  }
  
}

export default App;
