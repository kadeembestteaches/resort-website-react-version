import React from 'react'
import {Link} from "react-router-dom"

const ResortItemCard = (props) => {
    return (
        <div className="resort-card">

            <Link to = {`/resort/details/${props.id}`}> 
                <img src={props.image} alt={props.title}/>   
            </Link> 

            <div className="resortContent">
                <h3>{props.title}</h3>
                <p>${props.price} per night</p>
            </div>

    </div>
    )
}

export default ResortItemCard
