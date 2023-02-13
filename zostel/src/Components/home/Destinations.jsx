import data from '../../demo.json'
import ImageCard from './Image_card'
import { useState, useEffect } from 'react'

export default function HomeDestinations() {
    let [idx, setIdx] = useState(0)
    let [pre, setPre] = useState(true)
    let [nxt, setNxt] = useState(false)

    useEffect(() => {

        if (idx > 0) {
            setPre(false)
        } else {
            setPre(true)
        }

        if (idx < 50) {
            setNxt(false)
        } else {
            setNxt(true)
        }
    }, [idx])

    let info = data.Destinations.map((el) => {
        let obj = {
            id: el.id,
            name: el.name,
            img: el.img
        }
        return obj;
    })
    let len = info.length
    console.log(len)
    let cards = info.map((ele, index) => {
        if (index >= idx && index < idx + 10) {
            return (
                <ImageCard key={ele.id} image={ele.img} name={ele.name} height="300px" margin="8px" width="250px" />
            )
        }
    })


    return (
        <div>
            <button onClick={() => { setIdx(idx - 10) }} disabled={pre} style={{ cursor: "pointer", position: "absolute", left: "20px", top: "1070px", border: "none", borderRadius: "50%", height: "50px", width: "50px" }}><i class="fa-solid fa-chevron-left"></i></button>
            <button onClick={() => { setIdx(idx + 10) }} disabled={nxt} style={{ cursor: "pointer", position: "absolute", right: "20px", top: "1070px", border: "none", borderRadius: "50%", height: "50px", width: "50px" }}><i class="fa-solid fa-chevron-right"></i></button>
            <h1 style={{ textAlign: "left", padding: "20px" }}>Explore <span style={{ color: "#f15824" }}>Destinations</span></h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                {cards}
            </div>
        </div>
    )
}