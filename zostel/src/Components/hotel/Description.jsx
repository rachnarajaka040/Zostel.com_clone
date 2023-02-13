// import './Hotel.css'
import { useState } from 'react'
function Description({name,desc,aminities})
{
    let[show,setShow]=useState(false);

    function handleshow()
    {
        if(show)
        setShow(false)
        else
        setShow(true)
    }
    return <>
    <div className="abouthotel">
        <div>
        <div className={show ? "maxdescription" : "mindescription"}>
        <h1 className='hotelname'>{name}</h1>
        <p className='hoteldesc'>{desc.p}</p>
        <h4 className='recexp'>Recomemended experience:</h4>
        <p className='hoteldesc'>{desc.rec}</p>
        </div>
        <button  className='moreinfobut' onClick={handleshow}>{show ? "show less" :"show more" }</button>
        </div>
        <div className='aminities'>
            <h2>Aminities</h2>
            <div className='aminitie'>
                {aminities.map(e=>{
                    return <div className='amini'><i className='material-icons'>{e.icon}</i><p>{e.p}</p></div>
                })}
            </div>
        </div>
    </div>
    </>
}
export default Description