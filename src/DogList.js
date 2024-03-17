import React from "react";
import { Link } from "react-router-dom";


const DogList = ({ dogs }) => {


    return (
        <div className="DogList">
            <div className="DogList-dogs">
                <h1>Doggos!</h1>
                <nav>
                    {dogs.map(dog =>
                        <div className="DogList-choices" key={dog.name}>
                            <img src={dog.src} alt={dog.name}></img>
                            <Link exact to={`/dogs/${dog.name}`} >
                                {dog.name}
                            </Link>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    )
}

export default DogList;