import data from '../../demo.json'
import { useState } from 'react';
import Roomcom from './Roomcom';
import Summary from '../Summary'
function Room({rooms})
{
let [total,setTotal]=useState(0)
let [price,setPrice]=useState([])
let [kamra,setKamra]=useState([])

let handleKamra=(id,h)=>{

    if(h==0)
    {
        setKamra([...kamra,id])
    }
   else
   {
    let a=kamra.filter((e)=>{
        return id!=e
    })
    setKamra(a);
   }
}
let handlePrice=(id,h)=>{

    if(h==0)
    {
        setPrice([...price,id])
    }
   else
   {
    let a=price.filter((e)=>{
        return id!=e
    })
    setPrice(a);
   }
}
   let handleTotal=(id,h)=>{

    if(h==0)
    {
        setTotal(total+id);
    }
   else
   {
        setTotal(total-id);
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
                            <Roomcom {...e} handleKamra={handleKamra} handlePrice={handlePrice} handleTotal={handleTotal}/>
                             </>
                        }
                    })}
            </div>
        </div>
                    <Summary kamra={kamra} price={price} total={total}/>
    </div>
}
export default Room