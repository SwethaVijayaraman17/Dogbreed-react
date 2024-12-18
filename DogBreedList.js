import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { breed } from "./DogBreedJson";

const DogBreedList = (props) => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [breedList, setBreedList] = useState(breed);

    const handleSearch = () =>{
        setBreedList(breed.filter((ele) => (ele.breed_name.toLowerCase()).includes(value.toLowerCase())))
    }

    return (
        <>
            <div id='breedList'>
                {breedList.length !==0 ? breedList.map((ele, idx) => (
                    <div id={`breedCard${idx + 1}`} onClick={() => navigate('/description', { state: ele })}>
                        <img id={`breedImg${idx + 1}`} src={ele.img} />
                        <h3 id={`breedName${idx + 1}`}>{ele.breed_name}</h3>
                    </div>
                )) : <div id='notFound'>No breed found</div>}
                <div id='searchField'>
                    <input name="search" id='search' onChange={(e) => setValue(e.target.value)} />
                    <button id='searchBtn' onClick={handleSearch}>Search</button>
                </div>
            </div>
        </>
    )
}

export default DogBreedList;