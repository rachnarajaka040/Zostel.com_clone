import { useState } from 'react'
function HotelPic({img})
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
        console.log(img[ind])
   }
   const nextpic=()=>
   {
        if(currentpic==6)
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
   
    return<div className='parent'>
    <div className='picbox'>
        {img.map((e,i)=>{
        if(i===0)
        {
            return <div  className='picboximg1' style={{"backgroundImage":`url(${e})`}}></div>
        }
        if(i===1)
        {
            return <div className='picboximg2' style={{"backgroundImage":`url(${e})`}}></div>
        }
        if(i===2)
        {
            return <div className='picboximg3' style={{"backgroundImage":`url(${e})`}}></div>
        }
        if(i===3)
        {
            return <>
                <div  className='picboximg4' style={{"backgroundImage":`url(${e})`}}>
                    <button className='showpic' onClick={opengallery}>View all photos</button>
                    </div>   
                 
                 </>
        }
            
        })}


    </div>
    <div className={showimg ? 'viewpics':'hidepics'} >
        <span className='galtop'>
            <span className='pageno'>{currentpic+1} of 7</span>
            <button className='xgalbut' onClick={closegallery}>X</button>
            </span>
        <div className='gallerynav'>
        <button className='fwdbwd' onClick={prepic}>&#x21b6;</button>
        <div className='cphoto' style={{"backgroundImage":`url(${img[currentpic]})`}}></div>
        <button className='fwdbwd'onClick={nextpic}>&#x21b7;</button>
        </div>
        <div className='picnav'>
            {img.map((e,ind)=>
                {
                    return <button onClick={()=>{selectPic(ind)}} className='picselector'><img height="60px" width="120px" src={e} alt="img" />
                    </button>
                })}
        </div>
    </div>
    </div>
}
export default HotelPic