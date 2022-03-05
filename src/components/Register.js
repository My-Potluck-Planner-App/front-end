import React, {useState} from 'react';
import styled from 'styled-components';

const StyledRegister = styled.div`

    form{
        display: flex;
        flex-direction: column;
    }

`

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    username: ''
}

const Register = props => {
    
    const { addNewUser } = props;

    const [form, setForm ] = useState(initialState)

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addNewUser(form);
    }

    return(
        <StyledRegister>
            <h1>Register your new account!</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name: 
                    <input 
                        type='input'
                        name='firstName'
                        value={form.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label>Last Name:
                    <input 
                        type='input'
                        name='lastName'
                        value={form.lastName}
                        onChange={handleChange}
                    />
                </label>
                <label>Username:
                    <input 
                        type='input'
                        name='username'
                        onChange={handleChange}
                        value={form.username}
                    />
                </label>
                <label>Email:
                    <input 
                        type='input'
                        name='email'
                        onChange={handleChange}
                        value={form.email}
                    />
                </label>
                <button>Submit</button>
            </form>
        </StyledRegister>
    )
}

export default Register;