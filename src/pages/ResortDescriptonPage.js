
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom"

const ResortDescriptonPage = () => {


    const {id } = useParams();

    const [resort, setResort] = useState({
        title:"",
        imagePath:"",
        description:"",
        price :0

    })


    useEffect(()=>{

        //communicate with the backend!
        fetch("http://localhost:5000/resorts/"+id)
        .then(response=>response.json())
        .then(json=>{
    
              //We updated the data returned from the Backed with the resort state
                setResort(json.data);
    
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    
    
    },[])


    return (
    <div className="grid grid-row-3" id="main-container">  
        <Header/>
        <main>
            <section id="resort-description-section">
                    <div className="container grid grid-col-4 grid-gap-2">
        
                        <img src={resort.imagePath} alt="Resort Image"/>
                    
                        <div className="resort-description-content-area">
                            <h2>{resort.title}</h2>
                            <p>{resort.price} per night</p>
                            <h3>Details</h3>
                            <p>{resort.description}</p>
                        </div>
                    </div>
        
                </section>
        </main>
        <Footer/>
    </div>
    )
}

export default ResortDescriptonPage
