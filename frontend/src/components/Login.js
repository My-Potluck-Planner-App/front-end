import React, {useState} from 'react';
import styled from 'styled-components';

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
                <button>Sign Up</button>
            </form>
        </StyledLogin>
    )
}

export default Login;