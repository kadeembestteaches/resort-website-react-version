import React from 'react';
import ResortItemCard from "./ResortItemCard";

import image1 from "../assets/img/resort1.webp";
import image2 from "../assets/img/resort2.webp";
import image3 from "../assets/img/resort3.webp";
import image4 from "../assets/img/resort4.webp";

const ResortList = () => {


    return (
        <section id="section-resort-list">

            <div className= "container">

                <h1>Featured Resort</h1>

                <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

                    <ResortItemCard title={"Resort 1"} image={image1} price={30}/>
                    <ResortItemCard title={"Resort 2"} image={image2} price={50}/>
                    <ResortItemCard title={"Resort 3"} image={image3} price={70}/>
                    <ResortItemCard title={"Resort 4"} image={image4} price={150}/>
               
                </div>
            </div>
            
        </section>
    )
}

export default ResortList
