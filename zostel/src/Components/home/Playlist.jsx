import data from "../../demo.json"
import { useState } from "react";
import ImageCard from "./Image_card";

export default function PlayList({clr, name1, name2, start}) {
    let [idx, setIdx] = useState(start)

    let info = data.Destinations.map((el) => {
        let obj = {
            id: el.id,
            name: el.name,
            img: el.img
        }
        return obj;
    })

    let cards = info.map((ele, index) => {
        if (index >= idx && index < idx + 5) {
            return (
                <ImageCard key={ele.id} position="73%" image={ele.img} name={ele.name} height="220px" margin="8px" width="250px" />
            )
        }
    })

    return (
        <div style={{backgroundColor:clr||"white", paddingBottom:"20px"}}>
            {/* <button onClick={() => { setIdx(idx - 10) }} disabled={pre} style={{ cursor: "pointer", position: "absolute", left: "20px", top: "1070px", border: "none", borderRadius: "50%", height: "50px", width: "50px" }}>pre</button>
            <button onClick={() => { setIdx(idx + 10) }} disabled={nxt} style={{ cursor: "pointer", position: "absolute", right: "20px", top: "1070px", border: "none", borderRadius: "50%", height: "50px", width: "50px" }}>nxt</button> */}
            <h1 style={{ textAlign: "left", padding: "20px" }}>{name1} <span style={{ color: "#f15824" }}>{name2}</span></h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                {cards}
            </div>
        </div>
    )
}