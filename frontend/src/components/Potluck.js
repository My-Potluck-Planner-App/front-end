import React from "react";
import styled from "styled-components";

const StyledPotluck = styled.div`
    display: flex;
    flex-direction: column;
`

const PotLuck = props => {

    const { potluck } = props;

    console.log('potluck: ', potluck);
    
    return(
        <StyledPotluck>
            <h1>Potlucks</h1>
            <div className="potluckList">
                <h3></h3>
            </div>
        </StyledPotluck>
    )
}

export default PotLuck;