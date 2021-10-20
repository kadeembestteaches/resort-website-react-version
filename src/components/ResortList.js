import React from 'react';
import ResortItemCard from "./ResortItemCard";


const ResortList = (props) => {


    return (
        <section id="section-resort-list">

            <div className= "container">

                <h1>Featured Resort</h1>

                <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

                    {props.resorts.map((resort,index)=>( <ResortItemCard  key={index} id={resort._id} title={resort.title} image={resort.imagePath} price={resort.price} />))}
                        
                </div>
            </div>
            
        </section>
    )
}

export default ResortList
