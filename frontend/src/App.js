import React, { useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Potlucks from './components/Potlucks';
import PotluckForm from './components/PotluckForm';
import styled from 'styled-components';
import './App.css';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {

  const [ potlucks, setPotlucks ] = useState([])

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

  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/potlucks' element={<Potlucks />} />
        <Route path='/newPotluck' element={<PotluckForm addPotluck={addPotluck}/>} /> 
      </Routes>
    </StyledApp>
  );
}

export default App;
