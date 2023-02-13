function Location({name,img})
{
    const locStyle={
        "display":"flex",
        "flexDirection":"column",
        "minHeight":"650px",
        "backgroundImage":`url(${img})`,
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "alignItem":"center",
        "justifyContent":"center"
        
        
    }
    const nStyle={
        "color":"white",
        "fontWeight":"800"
    }
    return <>
        <div style={locStyle}>

            <h1 style={nStyle}>{name}</h1>
        </div>
    </>
}
export default Location