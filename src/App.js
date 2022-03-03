import React, { useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Potlucks from './components/Potlucks';
import Potluck from './components/Potluck';
import PotluckForm from './components/PotluckForm';
import Register from './components/Register';
import styled from 'styled-components';
import './App.css';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import dummyData from './dummyData/dummypotlucks.js';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {

  // Alot of this is temporary until we get a backend setup.

  //All state slices go here
  const [ potlucks, setPotlucks ] = useState(dummyData)
  const [ users, setUsers ] = useState([])


  //Helper functions go here
  const login = () => {

  }

  const logout = () => {

  }

  const addPotluck = potluck => {
    setPotlucks([
      ...potlucks,
      potluck
    ])
  }

  const addPotLuckItem = () => {

  }

  const addNewUser = () => {

  }


  
  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/potlucks' element={<Potlucks potlucks={potlucks}/>} />
        <Route path='/newPotluck' element={<PotluckForm addPotluck={addPotluck} potlucks={potlucks}/>} /> 
        <Route path='/register' element={<Register />} />
        <Route path='/potluck/:id' element={<Potluck potlucks={potlucks}/>} />
      </Routes>
    </StyledApp>
  );
}

export default App;
