import data from '../../demo.json'
import { useState } from 'react'
function Hotels({name,hotels})
{
    let[hover,Sethover]=useState(false);

    function hoveron()
    {
        Sethover(true);
    }
    function hoveroff()
    {
        Sethover(false)
    }

    // Styles
    const stayStyles={         
        "display":"flex",
        "margin":"35px 5% 2px 8%",
        "alignItems":"center",
        "minWidth":"680px",
        "width":"1200px",
        "minHeight":"384px",
    }
    const stayBkg={

        "minWidth":"650px",
        "minHeight":"388px",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "borderRadius":"10px"
        
    }
    const hinfo={
        "textAlign":"left",
        "backgroundColor":"white",
        "display":"flex",
        "minHeight":"240px",
        "minWidth":"600px",
        "width":"700px",
        "flexDirection":"column",
        "position": "relative",
        "right": "40px",
        "zIndex":"1",
        "borderRadius":"10px",
        "padding":"10px 30px",


        
    }
    const nStyle={
        //...
        color: "#f15824",
    }
    const zostel={
        "color": "#96a4a9",
        "fontSize":"medium",
        "padding":"10px 0"
    }
    const descStyle={
        "fontSize":"16px",
        "color":"gray",
        "margin":"20px 0"
    }
    const price={
        "display":"flex",
        "width":"100%",
        "justifyContent":"space-between"
        
    }
    const viewStyle={
        "backgroundColor": hover ? "white" : "#f15824",
        "color": hover ? "#f15824":"white",
        "width":"90px",
        "height":"40px",
        "border":"none",
        "borderRadius":"6px",
        "fontSize":"medium",
        "fontWeight":"700"
        

    }



    return<>
        <div>

            <h1 style={{"marginTop":"40px"}}>Stays at <span style={nStyle}>{name}</span></h1>
            {data.Hotels.map(e=>{

                if(hotels.includes(e.id))
                {
                    return <>
                    <div style={stayStyles} >
                        <div style={{...stayBkg,"backgroundImage":`url(${e.img[0]})`}} >
                   

                        </div>
                        <div style={hinfo}>
                            <h6 style={zostel}>ZOSTEL</h6>
                            <h2>{e.name}</h2>
                            <p style={descStyle}>{e.desc.rec}</p>
                           <div style={price}><h2>Starting from {e.location.min}</h2> <button onMouseEnter={hoveron} onMouseLeave={hoveroff} style={viewStyle}>View &#8594;</button></div> 
                        </div>
                    </div>
                </>
                }
            })}
        </div>
    </>
}
export default Hotels
// {}