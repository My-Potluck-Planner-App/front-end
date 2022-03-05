import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledPotluckForm = styled.div`
    .potluckForm{
        display: flex;
        flex-direction: column;
    }
`

const initialState = {
    id: null,
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
    const id = props.potlucks.length;

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
    const navigate = useNavigate();

    const { addPotluck } = props;

    const [ form, setForm ] = useState(initialState)
    const [ newItem, setNewItem ] = useState({
        itemToAdd: ''
    })

    const handleChange = e => {

        if(e.target.name === 'itemToAdd'){
            setNewItem({
                ...newItem,
                [e.target.name]: e.target.value
            })
        }else{
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }
    }
    
    const addItem = e => {
        e.preventDefault();
        setForm({
            ...form,
            itemsNeeded: [ ...form.itemsNeeded, newItem]
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addPotluck({
            ...form,
            id: id
        })
        // addPotluck(form);
        navigate('/potlucks');
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

                <div className="addItemSection">
                    <h3>Items to bring:</h3>
                    {form.itemsNeeded.length > 0 ? (form.itemsNeeded.map(item => {
                        return <div>{item.itemToAdd}</div>
                    })) : ''}
                    <input 
                        type='input'
                        name='itemToAdd'
                        onChange={handleChange}
                    />
                    <button onClick={addItem}>Add Item</button>
                </div>

                <button>Submit</button>
            </form>
        </StyledPotluckForm>
    )
}

export default PotluckForm;