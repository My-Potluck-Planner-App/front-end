import React from 'react';
import styled from 'styled-components';
import icon from '../images/potluck.jpg';
import { NavLink } from 'react-router-dom'

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .headerLinks{
        display: flex;
        width: 40%;
        justify-content: space-evenly;
        align-items: center;
        font-size: 1.5rem;
        margin: 0 30px;
    }
`


const Header = props => {

    const {logout} = props;

    return(
        <StyledHeader>
            <img src={icon} alt='Potluck Logo'></img>
            <div className='headerLinks'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/potlucks'>Potlucks</NavLink>
                <NavLink to='/newPotluck'>Create Potluck</NavLink>
                <button onClick={() => {
                    logout();
                }}>Logout</button>
            </div>
        </StyledHeader>
    )
}

export default Header;