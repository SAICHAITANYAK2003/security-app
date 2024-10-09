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
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/features" component={Features} />
        <Route exact path='/resources' component={Resources}/>
        <Route exact path='/contact-us' component={Contactus}/>
      </Switch>
    </BrowserRouter>
    </>
    
  );
}

export default App;
