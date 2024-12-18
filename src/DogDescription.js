import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DogDescription = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    const {state} = location;
    return(
        <div id='descriptionDiv'>
            <h1 id='selectedBreedName'>{state.breed_name}</h1>
            <img id='selectedImg' src={state.img} />
            <p id='selectedDes'>{state.description}</p>
            <button id='backBtn' onClick={() => navigate('/')}>Back</button>
        </div>
    )
}

export default DogDescription;