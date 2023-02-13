// Common for HotelPage, Payment page
import { useNavigate } from "react-router-dom"
function Summary({kamra,price,total})
{

    let handleProceed=useNavigate()
  return <>
    <div className='summary'>
    <h2>Summary</h2>
    <p>1 night starting from Tue 14 Feb, 2023</p>
    <div className='booked' >
        {kamra.map((e,ind)=>
            {
                return <>
                        <h1>{e}</h1>
                        <h2>{price[ind]}</h2>
                </>
            })
            }
    </div>
    <h1>{total}</h1>
    <button className="proceed" onClick={()=>{handleProceed(`/Payment/${total}/${price}`)}}>Proceed</button>
    </div>
    
  </>
}
export default Summary