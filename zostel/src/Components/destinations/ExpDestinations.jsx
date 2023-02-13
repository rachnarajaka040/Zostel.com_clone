// Explore Destinations// Explore Destinations
import data from "../../demo.json";
import { useState } from "react";




function ExpDestination(){

    let [item, setItem] = useState("")

    console.log(data.Destinations);
    return (
        <>
         <h1>Explore <span style={{color: "#f15824"}}> Destinations</span></h1>
         <p style={{textAlign: "left",paddingLeft: "80px", margin:"20px 0px"}}>Home <span><i class="fa-solid fa-arrow-right"></i></span> Destinations</p>
        <div className="des" style={{display: "flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center"}}>
           
            {
                data.Destinations.map((e) => {
                    return (
                        <div style={{
                            backgroundImage: `url(${e.img})`, 
                            width: "300px",
                            height: "300px",
                            margin: "8px",
                            display: "flex",
                            padding: "10px",
                            backgroundSize: "cover",
                            borderRadius: "10px"                    
                            }}>
                            <h3 style={{color:"white", position:"relative", top:"90%"}}>{e.name}</h3>
                        </div>
                        // <img src={e.img}></img>
                    )
                })
            }
        </div>
        </>
    )
    
}
export default ExpDestination;