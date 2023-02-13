
export default function NewDesCard({ image, height, name, margin, width }) {

    return (
        <div>
            <div style={{ borderRadius: "8px 8px 0 0", backgroundSize:"200%", backgroundImage: `url(${image})`, height: `${height}`, width: `${width}`, margin: `${margin}`, marginBottom: "0px" }}>
                <h4 style={{ borderRadius: "5px", textAlign: "center", width: "60px", backgroundColor: "white", paddingLeft: "10px", textAlign: "left", color: "black", position: "relative", top: "2%", left: "70%" }}>TRIPS</h4>
            </div>
            <div style={{ borderRadius: "0 0 8px 8px", backgroundColor: "white", height: `${height}`, width: `${width}`, margin: `${margin}`, marginTop: "0px" }}>
                <h2 style={{ textAlign: "left", margin: "0px", paddingLeft: "5px" }}>Introducing Zostel {name}</h2>
                <p style={{marginTop:"5px", textAlign:"left", padding:"0 5px"}}>7-Day Trip to South India with Zostel Explore Coorg, Wayanad, Mysore, and Ooty. Meals, local guide, stay, and transport included.</p>
                <button className="book" style={{backgroundColor:"#f15824", color:"white", border:"none", width:"88%", height:"40px", borderRadius:"5px", cursor:"pointer"}}>Book Now</button>
            </div>
        </div>
    )
}