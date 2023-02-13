import { useState } from "react";
function Roomcom({img,name,price,size,desc,aminities,handleKamra,handleTotal,handlePrice }) {
    //    Summary

    let[booking,setBooking]=useState("done_outline");
    let[currentpic,setCurrentpic]=useState(0);
    let [showimg, setShowimg] = useState(false)

let handlebooking=()=>
{
    if(booking=="done_outline")
    {
        setBooking("delete")
        handleKamra(name,0)
        handlePrice(price,0)
        handleTotal(price,0)
    }
    else
    {
        setBooking("done_outline")
        handleKamra(name,1)
        handlePrice(price,1)
        handleTotal(price,1)
    }
        
}








    // Gallery
    const opengallery = () => {
        setShowimg(true)
    }
    const closegallery = () => {
        setShowimg(false)
    }

    function selectPic(ind) {
        setCurrentpic(ind)

    }
    const nextpic = () => {
        if (currentpic == 4) {
            setCurrentpic(0)
        }
        else {
            setCurrentpic(currentpic + 1);
        }

    }
    const prepic = () => {
        if (currentpic != 0) {
            setCurrentpic(currentpic - 1);
        }
        else {
            setCurrentpic(6);
        }


    }
    return <>
        <div className='wholeroom'>
            <div className='room'>
                <button className='roompic' onClick={opengallery}>
                    <img src={img[0]} width="200px" height="180px" alt="" />
                </button>
                <div className='roomdetails'>
                    <div className='roomndp'>
                        <h4>{name}</h4>
                        <h3>{price}</h3>
                    </div>
                    <div className='roomsize'><i className='material-icons'>person</i><p>X {size}</p> </div>
                    <p>{desc}</p>
                    <div className='roomaminities'>
                        {aminities.map(a => {
                            return <>
                                <div className='roomaminiti'>
                                    <span>{a.p}</span>
                                    <i className='material-icons'>{a.icon}</i>
                                </div>
                            </>
                        })}
                    </div>
                    <div className='roombottom'>
                        <input className='availablity' type="date" value="2023-02-14" min="2023-02-14" max="2023-02-20" />
                        <button onClick={handlebooking} className='material-icons'>{booking}</button>
                    </div>
                </div>

            </div>

        </div>
        <div className={showimg ? 'viewpics' : 'hidepics'} >
            <span className='galtop'>
                <span className='pageno'>{currentpic + 1} of 7</span>
                <button className='xgalbut' onClick={closegallery}>X</button>
            </span>
            <div className='gallerynav'>
                <button className='fwdbwd' onClick={prepic}>&#x21b6;</button>
                <div className='cphoto' style={{ "backgroundImage": `url(${img[currentpic]})` }}></div>
                <button className='fwdbwd' onClick={nextpic}>&#x21b7;</button>
            </div>
            <div className='picnav'>
                {img.map((i, ind) => {
                    return <button onClick={() => { selectPic(ind) }} className='picselector'><img height="60px" width="120px" src={i} alt="img" />
                    </button>
                })}
            </div>
        </div>
    </>
}
export default Roomcom