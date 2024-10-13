import {Route, Switch,Redirect } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Features from './components/Features';
import Resources from './components/Resources';
import Contactus from './components/Contactus';
import './App.css';

function App() {
  return (
    <>
   
      <Switch>
        <Route path="/login" component={Login} exact/>
        <Route path="/home" component={Home} exact />
        <Redirect from='/' to='/home' exact/>
        <Route path="/features" component={Features} exact />
        <Route path='/resources' component={Resources} exact/>
        <Route path='/contact-us' component={Contactus} exact/>
      </Switch>
   
    </>
    
  );
}

export default App;