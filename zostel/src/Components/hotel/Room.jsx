import data from '../../demo.json'
function Room({rooms})
{
    console.log(rooms)
    return <div className='booking'>
        <div className='rooms'>
            <div className='booknav'>
                <div className='bookstay'>
                    <h1>Book your stays</h1>
                    <p>Select from a range of beautiful rooms</p>
                </div>
                <div className='mnddate'>
                    <span className='inr'>INR</span>
                    <span className='date'>Tue 14 feb, 2023 &nbsp; &#2192; &nbsp; Mon 20 feb,2023 </span>
                </div>
            </div>
            <div className='roomcontainer'>
                {data.Rooms.map(e=>
                    {
                        if(rooms.includes(e.id))
                        {
                            return <>
                            <div className='room'>
                            <div className='roompic'>

                            </div>
                            <div className='roomdetails'>
                                <div className='roomnndp'>
                                    <h4>{e.name}</h4>
                                    <h3>{e.price}</h3>
                                </div>
                                <span className='roomsize'><i className='material-icons'>person</i> x {e.size}</span>
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
                                    <button className='availablity'>Availability calendar</button>
                                    <button className='selroom'>select room</button>
                                </div>
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