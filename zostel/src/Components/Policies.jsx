// Common for HotelPage, Payment page
function Policies({policies})
{
    return <>
        <div className="policies">
            <h2>Property Policy</h2>
            <ul>
                {policies.property.map(e=>{
                    return <li>{e}</li>
                })}
            </ul>
            <h2>Cancellation Policy</h2>
            <ul>
                {policies.cancellation.map(e=>{
                    return <li>{e}</li>
                })}
            </ul>
            <p>For any other queries, please reach out to us at reservations@zostel.com.</p>
        </div>

     </>
}
export default Policies