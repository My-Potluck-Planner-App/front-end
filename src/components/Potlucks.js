import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PotLuck from "./Potluck";

const StyledPotlucks = styled.div`
    display: flex;
    width: 60%;
    flex-wrap: wrap;

    .potluckDetails{
        border: red solid 1px;
        width: calc(50% - 2px);
        margin: 20px 0; 
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .details{
        display: flex;
        flex-direction: column;
    }
`

const Potlucks = props => {

    const navigate = useNavigate();

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
                            <button onClick={() => {
                                navigate(`/potluck/${potluck.id}`)
                            }}>View Event</button>
                        </div>
                    )
                })
            }
        </StyledPotlucks>
    )
}

export default Potlucks;