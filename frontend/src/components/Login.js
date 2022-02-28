import React, {useState} from 'react';
import styled from 'styled-components';
import { Navigate, useNavigate } from 'react-router-dom';

const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    border: black solid 1px;
    align-items: center;

    form{
        display: flex;
        flex-direction: column
    }

    label{
        display: flex;
        flex-direction: column;
        margin: 5px 0; 
    }
`
const initialState = {
    username: '',
    password: ''
}

const Login = () => {

    const navigate = useNavigate();
    
    const [form, setForm ] = useState(initialState)

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return(
        <StyledLogin>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Username
                    <input 
                        type='input'
                        name='username'
                        value={form.username}
                        onChange={handleChange}
                    />
                </label>
                <label>Username
                    <input 
                        type='password'
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
            <button onClick={() => navigate('/register')} >Sign Up</button>
        </StyledLogin>
    )
}

export default Login;