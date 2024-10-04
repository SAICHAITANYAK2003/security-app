import { Component } from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home';
import './App.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
          <Routes>
            <Route exact path="/login"  element={<Login/>} />
            <Route exact path='/' element={<Home/>}/>
          </Routes>
      </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
