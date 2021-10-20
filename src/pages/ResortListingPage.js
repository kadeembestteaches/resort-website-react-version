import {useEffect} from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResortList from "../components/ResortList"

const ResortListingPage = (props) => {

   
  useEffect(()=>{


    //GET, POST,PUT, DELETE from our Front-End TO our Back

    fetch("http://localhost:5000/resorts")
    .then(response=>response.json())
    .then(json=>{

          //We updated the data returned from the Backed with the resort state
            props.setResorts(json.data)

    })
    .catch(err=>{
        console.log(`Error ${err}`)
    })


},[])




    return (
    <div className="grid grid-row-3" id="main-container">  
        <Header/>
        <main>
          <ResortList resorts = {props.resorts} />
        </main>
        <Footer/>
    </div>
    )
}

export default ResortListingPage
