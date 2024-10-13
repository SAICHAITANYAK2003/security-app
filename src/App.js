import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Features from './components/Features';
import Resources from './components/Resources';
import Contactus from './components/Contactus';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} exact />
        <Route path="/features" component={Features} exact />
        <Route path='/resources' component={Resources} exact/>
        <Route path='/contact-us' component={Contactus} exact/>
      </Switch>
    </BrowserRouter>
    </>
    
  );
}

export default App;