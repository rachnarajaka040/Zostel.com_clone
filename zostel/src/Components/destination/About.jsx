import { useState } from "react"
function About({desc,name})
{
    let [show ,setShow]=useState("show more")

    
    function handleShow()
    {
        if(show==="show more")
        {
            setShow("show less")

        }
        else
        {
            setShow("show more")

        }
    }
    // parent div
    const parent={
        "display":"flex",
        "flexDirection":"column",
        "alignItems":"center",
        "width":"100%",
       
        // "justifyContent":"center"

    }

    // button Styles
    const btnStyle={

        "color": "#f15824",
        "fontSize":"20px",
        "fontWeight":"600",
        "border":"none"
    }
    let whStyle={

        "textAlign":"center",
        "height":"300px",
        "overflow":"hidden",
        "maxWidth":"800px",
        
    }
    let wsStyle={

        "textAlign":"center",
        "maxWidth":"800px"
        
    }
// info styles

const welcomeStyle={

}
const nStyle={
    "color": "#f15824",
    "padding":"5px",
    "marginTop":"0px",
    "fontSize":"40px"
}

const subh={
    "color": "gray"
}

const point={
    "margin":"10px",
    "width":"100%"
}



    return <>
        <div style={parent}>
        <div style={show==="show more" ? whStyle : wsStyle} >
            <h1 style={welcomeStyle}>Welcome to </h1>
            <h1 style={nStyle}>{name}</h1>
                <h4 style={subh}>About</h4>
            {desc.about.map((e)=>{
                return <p style={point}>{e}</p>
            })}
                <h4 style={subh}>Why we love {name}</h4>
            {desc.why.map((e)=>{
                return <p style={point}>{e}</p>
            })}
                <h4 style={subh}>Fun Facts:</h4>
            {desc.facts.map((e)=>{
                return <p style={point}>{e}</p>
            })}
        </div>
        <button style={btnStyle} onClick={handleShow}>{show}</button>
        </div>
    </>
}
export default About