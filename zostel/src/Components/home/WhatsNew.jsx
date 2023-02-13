import data from '../../demo.json'
import { useState } from 'react';
import NewDesCard from './NewDesCard';

export default function WhatsNew() {
    let [idx, setIdx] = useState(10)

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
                <NewDesCard key={ele.id} image={ele.img} name={ele.name} height="240px" margin="8px" width="250px" />
            )
        }
    })


    return (
        <div style={{ backgroundColor: "#e8f0f2", paddingBottom:"30px" }}>
            {/* <button disabled={false} style={{ cursor: "pointer", position: "absolute", left: "20px", top: "1070px", border: "none", borderRadius: "50%", height: "50px", width: "50px" }}>pre</button>
            <button disabled={false} style={{ cursor: "pointer", position: "absolute", right: "20px", top: "1070px", border: "none", borderRadius: "50%", height: "50px", width: "50px" }}>nxt</button> */}
            <h1 style={{ textAlign: "left", padding: "20px" }}>What's  <span style={{ color: "#f15824" }}>New</span></h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                {cards}
            </div>
        </div>
    )
}