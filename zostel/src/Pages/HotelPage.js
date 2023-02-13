import '../Components/hotel/Hotel.css'
import Policies from '../Components/Policies'
import Description from '../Components/hotel/Description'
import HotelPic from '../Components/hotel/HotelPic'
// import Hotel from '../Components/hotel/LocateUs'
import Room from '../Components/hotel/Room'
import data from '../demo.json'
import { useParams } from 'react-router-dom'
function Hotel()
{
    const {cid}=useParams();

    let elem=null;
    data.Hotels.map(e=>{
        if(cid==e.id)
        {
            elem=e

        }
    })

    console.log(elem)
    return(<>

    <HotelPic img={elem.img}/>
    <Description desc={elem.desc} aminities={elem.aminities} name={elem.name}/>
    <Room rooms={elem.location.rooms}/>
    <Policies  policies={elem.policies}/>
    </>)
}
export default Hotel;