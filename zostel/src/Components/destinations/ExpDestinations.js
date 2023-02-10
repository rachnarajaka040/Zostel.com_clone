// Explore Destinations
import data from "../../demo.json";
import { useState } from "react";
// now i'm working



function ExpDestination(){

    let [item, setItem] = useState("")

    console.log(data.Destinations);
    return (
        <>
         <h1>Explore Destinations</h1>
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
                            {e.name}
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