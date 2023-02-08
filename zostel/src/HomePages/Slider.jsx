import { useState, useEffect } from "react"
import { getImages } from "./SliderData"
function Slider() {
    let [count, setCount] = useState(0)
    let imgs = getImages();
    useEffect(() => {
        setInterval(() => {
            setCount((pre)=>{
                if(pre===4){
                    return 0
                }
                return pre+1
            })
        }, 2000)
    }, [])
    return (
        <div>
            <div style={{ color: "white", backgroundImage: `url(${imgs[count]})`, height: "600px" }}>
                <h1 style={{fontSize:"70px",  position:"relative", top:"11%"}}>Live it. Now</h1>
                <div style={{width:"80%", height:"200px", backgroundColor:"white", position:"relative", left:"10%", top:"5%", borderRadius:"10px"}}></div>
            </div>
        </div>
    )
}
export default Slider