import data from '../../demo.json'
import { useState } from 'react';
function Room({rooms})
{
    let[showimg,setShowimg]=useState(false)
   let[currentpic,setCurrentpic]=useState(0);

   const opengallery=()=>
   {
        setShowimg(true)
   }
   const closegallery=()=>
   {
        setShowimg(false)
   }

   function selectPic(ind)
   {
        setCurrentpic(ind)

   }
   const nextpic=()=>
   {
        if(currentpic==4)
        {
            setCurrentpic(0)
        }
        else
        {
            setCurrentpic(currentpic+1);
        }
        
   }
   const prepic=()=>
   {
        if(currentpic!=0)
        {
        setCurrentpic(currentpic-1);
        }
        else
        {
            setCurrentpic(6);
        }
   

   }
   
    return <div className='booking'>
        <div className='rooms'>
            <div className='booknav'>
                <div className='bookstay'>
                    <h1>Book your stays</h1>
                    <p>Select from a range of beautiful rooms</p>
                </div>
                <div className='mnddate'>
                    <span className='inr'>INR</span>
                    <span className='date'>Tue 14 feb, 2023 &#8594; Mon 20 feb,2023 </span>
                </div>
            </div>
            <div className='roomcontainer'>
                {data.Rooms.map((e,ind)=>
                    {
                        if(rooms.includes(e.id))
                        {
                            return <>
                            <div className='wholeroom'>
                            <div className='room'>
                            <button className='roompic' onClick={opengallery}>
                                    <img src={e.img[0]} width="200px" height="180px" alt="" />
                            </button>
                            <div className='roomdetails'>
                                <div className='roomndp'>
                                    <h4>{e.name}</h4>
                                    <h3>{e.price}</h3>
                                </div>
                                <div className='roomsize'><i className='material-icons'>person</i><p>X {e.size}</p> </div>
                                <p>{e.desc}</p>
                                <div className='roomaminities'>
                                    {e.aminities.map(a=>{
                                        return <>
                                        <div className='roomaminiti'>
                                            <span>{a.p}</span>
                                            <i className='material-icons'>{a.icon}</i>
                                        </div>
                                        </>
                                    })}
                                </div>
                                <div className='roombottom'>
                                    <input  className='availablity' type="date" value="2023-02-14"min="2023-02-14" max="2023-02-20" />
                                    <button className='selroom'>select room</button>
                                </div>
                            </div>
                            <div className='avalcal'>

                            </div>
                            </div>
                           
                            </div>
                            
                            <div className={showimg ? 'viewpics':'hidepics'} >
                            <span className='galtop'>
                    <span className='pageno'>{currentpic+1} of 7</span>
                    <button className='xgalbut' onClick={closegallery}>X</button>
                    </span>
                <div className='gallerynav'>
                <button className='fwdbwd' onClick={prepic}>&#x21b6;</button>
                <div className='cphoto' style={{"backgroundImage":`url(${e.img[currentpic]})`}}></div>
                <button className='fwdbwd'onClick={nextpic}>&#x21b7;</button>
                </div>
                <div className='picnav'>
                    {e.img.map((i,ind)=>
                        {
                    return <button onClick={()=>{selectPic(ind)}} className='picselector'><img height="60px" width="120px" src={i} alt="img" />
                    </button>
                })}
        </div>
    </div>
                            </>
                        }
                    })}
            </div>
        </div>
        <div className='summary'>
        <h2>Summary</h2>
        <p>1 night starting from Tue 14 Feb, 2023</p>
        <div className='booked'>
        </div>
        </div>
    </div>
}
export default Room