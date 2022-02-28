import React, { useState } from "react";
import styled from "styled-components";

const StyledPotluckForm = styled.div`


    .potluckForm{
        display: flex;
        flex-direction: column;
    }


`

const initialState = {
    name: '',
    location: '',
    date: '',
    time: '',
    numberAttending: 0,
    listOfAttendees: [],
    itemsNeeded: [],
    itemsClaimed: [] //These are items that someone has already agreed to bring
}

const PotluckForm = props => {

/*
    List of thins a potluck needs
    -name(name of event)
    -location
    -date
    -time
    -numberAttending
    -listOfAttendees
    -allItems
    -itemsNeeded
*/
    const { addPotluck } = props;

    const [ form, setForm ] = useState(initialState)

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addPotluck(form);
    }

    return(
        <StyledPotluckForm>
            <h1>New Potluck</h1>
            <form className="potluckForm" onSubmit={handleSubmit}>
                <label>Event name:
                    <input 
                        type='input'
                        name='name'
                        onChange={handleChange}
                        value={form.name}
                    />
                </label>
                <label>Location:
                    <input 
                        type='input'
                        name='location'
                        onChange={handleChange}
                        value={form.location}
                    />
                </label>
                <label>Date:
                    <input 
                        type='date'
                        name='date'
                        onChange={handleChange}
                    />
                </label>
                <label>Time:
                    <input 
                        type='time'
                        name='time'
                        onChange={handleChange}
                    />
                </label>

                <div>
                    <h3>Items to bring:</h3>
                    
                </div>

                <button>Submit</button>
            </form>
        </StyledPotluckForm>
    )
}

export default PotluckForm;