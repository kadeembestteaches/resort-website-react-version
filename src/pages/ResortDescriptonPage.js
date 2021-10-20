
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom"

const ResortDescriptonPage = () => {



    const [resort, setResort] = useState({
        title:"",
        imagePath:"",
        description:"",
        price :0

    })


    return (
    <div className="grid grid-row-3" id="main-container">  
        <Header/>
        <main>
            <section id="resort-description-section">
                    <div className="container grid grid-col-4 grid-gap-2">
        
                        <img src="Testing" alt="Resort Image"/>
                    
                        <div className="resort-description-content-area">
                            <h2>Test</h2>
                            <p>90.00 per night</p>
                            <h3>Details</h3>
                            <p>blah</p>
                        </div>
                    </div>
        
                </section>
        </main>
        <Footer/>
    </div>
    )
}

export default ResortDescriptonPage
