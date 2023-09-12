import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RoutesPages from './components/routes/router';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
    <div className="App">

  

      <RoutesPages />


    </div>
  );
}

export default App;
