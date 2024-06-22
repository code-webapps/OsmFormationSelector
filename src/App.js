import React from 'react'
import './App.css';
import logo from './Images/osmtacticslogo.png';
import logo2 from './Images/osmtacticslogo2.png';
import SelectWeakerTeam from './Components/SelectWeakerTeam';
import SelectStrongerTeam from './Components/SelectStrongerTeam';



function App() {
  return (
   <body>
    <div className="App">
    <center><img src={logo} width={200} height={100} alt="" /> <img src={logo2} width={300} height={140} alt="" /></center> 
    <SelectWeakerTeam />
    <SelectStrongerTeam />
 </div>
 </body>
  );
}

export default App


