import '../Components/hotel/Hotel.css'
import Policies from '../Components/Policies'
import Description from '../Components/hotel/Description'
import HotelPic from '../Components/hotel/HotelPic'
// import Hotel from '../Components/hotel/LocateUs'
import Room from '../Components/hotel/Room'
// import Hotel from '../Components/hotel/OtherStays'
function Hotel({id,name,img,desc,policies,location,aminities})
{
    return<>
    <HotelPic img={img}/>
    <Description desc={desc} aminities={aminities} name={name}/>
    <Room rooms={location.rooms}/>
    <Policies  policies={policies}/>
    </>
}
export default Hotel;