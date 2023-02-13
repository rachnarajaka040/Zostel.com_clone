

export default function ImageCard({image, name, height, margin, width, position}){
    return(
        <div style={{cursor:"pointer", borderRadius:"8px", backgroundImage: `url(${image})`, height:`${height}`, width:`${width}`, margin:`${margin}`, backgroundSize:`210%`}}>
            <h3 style={{paddingLeft:"10px", textAlign:"left", color:"white", position:"relative", top:position||"80%"}}>{name}</h3>
        </div>
    )
}
