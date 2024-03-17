import React from "react";
import { v4 as uuid } from "uuid";
import { useParams, Link, useHistory } from "react-router-dom";



const DogDetails = ({ dogs }) => {
    const history = useHistory();

    const dogName = useParams().name;

    const dog = dogs.find(dog => dog.name.toLowerCase() === dogName.toLowerCase());

    if (!dog) {
        history.push('/dogs')
        return null;
    }

    return (
        <div className="DogDetails">
            <div className="DogDetails-image-container">
                <img src={dog.src} alt={`${dog.name}`} />
                <div className="DogDetails-info">
                    <h3>Name: {dog.name}</h3>
                    <h5>Age: {dog.age}</h5>
                    <ul>
                        {dog.facts.map(fact =>
                            <li key={uuid()}>{fact}</li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="DogDetails-nav">
                <nav>
                    <Link exact to='/dogs'>Go Back</Link>
                </nav>
            </div>
        </div>
    )
}

export default DogDetails;