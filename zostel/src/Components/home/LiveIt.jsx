import { useState, useEffect } from "react"
import { getImages } from "./Liveit_images";

function Slider() {
    let [count, setCount] = useState(0)
    let imgs = getImages();
    useEffect(() => {
        setInterval(() => {
            setCount((pre) => {
                if (pre === 4) {
                    return 0
                }
                return pre + 1
            })
        }, 2000)
    }, [])
    return (
        <div>
            <div style={{ color: "white", backgroundImage: `url(${imgs[count]})`, height: "600px" }}>
                <h1 style={{ fontSize: "70px", position: "relative", top: "11%" }}>Live it. Now</h1>
                <div style={{display:"flex",flexDirection:"column", justifyContent:"space-evenly", width: "80%", height: "200px", backgroundColor: "white", position: "relative", left: "10%", top: "20%", borderRadius: "10px" }}>
                    <div style={{ display: "flex" }}>
                        <a style={{ textDecoration: "none", color: "#6f7988", margin: "auto" }} href="#"><h3>DESTINATIONS</h3></a>
                        <a style={{ textDecoration: "none", color: "#6f7988", margin: "auto" }} href="#"><h3>ZOSTEL</h3></a>
                        <a style={{ textDecoration: "none", color: "#6f7988", margin: "auto" }} href="#"><h3>ZOSTEL HOMES</h3></a>
                        <a style={{ textDecoration: "none", color: "#6f7988", margin: "auto" }} href="#"><h3>ZOSTEL PLUS</h3></a>
                    </div>
                    <hr style={{ border: "0.5px solid #e2e8f0" }} />
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <div style={{ color: "#96a4a9" }}>
                            <p><b>SELECT YOUR DESTINATION</b></p>
                            <input style={{outline:"none", width: "190px", border: "none" }} placeholder="eg. Manali, Jodhpur, Jaipur, etc." type="text" name="" id="" />
                            <hr />
                        </div>
                        <div style={{ color: "#96a4a9" }}>
                            <p><b>CHECK IN</b></p>
                            <input style={{outline:"none", width: "190px", border: "none" }} placeholder="dd-mm-yyyy" type="date" name="" id="" />
                            <hr />
                        </div>
                        <div style={{ color: "#96a4a9" }}>
                            <p><b>CHECK OUT</b></p>
                            <input style={{outline:"none", width: "190px", border: "none" }} placeholder="dd-mm-yyyy" type="date" name="" id="" />
                            <hr />
                        </div>
                        <div><button style={{backgroundColor:"#f15824", color:"white", border:"none", width:"300px", height:"50px", borderRadius:"10px", position:"relative", top:"5px", fontSize:"16px", fontWeight:"500" }}>Book Now</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Slider