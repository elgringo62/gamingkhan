import './App.css';
import Homepage from './Screens/Homepage';
import Header from './Components/Header';
import Profile from './Components/Profile';
import {
  Router,
  Routes,
  Link,
  Switch,
  Route

  } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <Homepage/>
    </div>
  );
}

export default App;
