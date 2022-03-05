import React, { useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Potlucks from './components/Potlucks';
import Potluck from './components/Potluck';
import PotluckForm from './components/PotluckForm';
import Register from './components/Register';
import styled from 'styled-components';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import dummyData from './dummyData/dummypotlucks.js';
//import axiosWithAuth from './axios';
//import axios from 'axios';

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

  // useEffect(() => {
  //   axios.get('https://my-potluck-planner-app.herokuapp.com/potlucks')
  //   .then(resp => {
  //     console.log('get resp: ', resp)
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }, [])


  //Helper functions go here
  const login = userObj => {
    console.log('inside of login');
    console.log('user obj: ', userObj)


    //aixos call not working for some reason.
    // axios.post('https://my-potluck-planner-app.herokuapp.com/auth/login', userObj)
    // .then(resp => {
    //   console.log('login resp: ', resp)
    // })
    // .catch(error => {
    //   console.log(error)
    // })
  }

  const logout = () => {
    if(localStorage.getItem('token')){
      localStorage.removeItem('token');
    }
  }

  const addPotluck = potluck => {
    setPotlucks([
      ...potlucks,
      potluck
    ])
  }

  // const addPotLuckItem = () => {

  // }

  const addNewUser = userObj => {
    setUsers([
      ...users,
      userObj
    ])
  }


  
  return (
    <StyledApp>
      <Header logout={logout}/>
      <Routes>
        <Route path='/' element={<Login login={login}/>} />
        <Route path='/potlucks' element={<Potlucks potlucks={potlucks}/>} />
        <Route path='/newPotluck' element={<PotluckForm addPotluck={addPotluck} potlucks={potlucks}/>} /> 
        <Route path='/register' element={<Register  addNewUser={addNewUser}/>} />
        <Route path='/potluck/:id' element={<Potluck potlucks={potlucks}/>} />
      </Routes>
    </StyledApp>
  );
}

export default App;
