import React from "react";
import styled from "styled-components";
import PotLuck from "./Potluck";

const StyledPotlucks = styled.div`


    .details{
        display: flex;
        flex-direction: column;
    }
`

const Potlucks = props => {

    const { potlucks } = props;

    console.log('Porlucks props: ', props)

    return(
        <StyledPotlucks>
            {
                potlucks.length === 0
                ? 'There are no potlucks quite yet'
                : potlucks.map(potluck => {
                    return (
                        <div className="potluckDetails">
                            <h3>{potluck.name}</h3>
                            <div className="details">
                                <span>Date: {potluck.date}</span>
                                <span>Time: {potluck.time}</span>
                                <span>Location: {potluck.location}</span>
                            </div>
                        </div>
                    )
                })
            }
        </StyledPotlucks>
    )
}

export default Potlucks;