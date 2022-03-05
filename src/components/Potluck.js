import React from "react";
import styled from "styled-components";
import { 
  useParams
} from 'react-router-dom';

const StyledPotluck = styled.div`
    display: flex;
    flex-direction: column;

    .details{
        display: flex;
        flex-direction: column;
    }

    .itemsSomeonesBringing{
        display: flex;
        flex-direction: column;
    }
`

const PotLuck = props => {

    const { id } = useParams();

    const { potlucks } = props;

    const potluck = potlucks.find(item => {
        
        return item.id === parseInt(id);
    })

    
    return(
        <StyledPotluck>
            <h1>{potluck.name}</h1>
            <div className="details">
                <span>Date: {potluck.date}</span>
                <span>Time: {potluck.time}</span>
                <span>Location: {potluck.location}</span>
            </div>
                
            <h4>Here are items people are already bringing.</h4>    
            <div className="itemsSomeonesBringing">
                {potluck.itemsNeeded.length > 0
                ? potluck.itemsNeeded.map(item => {
                    return <span>{item.itemToAdd}</span>
                })
                : 'There are no more items that we need for the potluck!'}
            </div>

            <h4>Here is a list of items people are already bringing.</h4>
            <div className="itemsSomeoneNeedsToBring">
                {potluck.itemsClaimed.length > 0
                ? potluck.itemsClaimed.map(item => {
                    return <span>{item.itemToAdd}</span>
                })
                : 'Noone is bringing anything yet!'}
            </div>



        </StyledPotluck>
    )
}

export default PotLuck;