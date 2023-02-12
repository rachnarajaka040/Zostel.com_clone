// import Hotel from '../Components/hotel/Hotel'
// import Hotel from '../Components/hotel/Aminities'
import Description from '../Components/hotel/Description'
import HotelPic from '../Components/hotel/HotelPic'
// import Hotel from '../Components/hotel/LocateUs'
// import Hotel from '../Components/hotel/OtherStays'
function Hotel({id,name,img,desc,policies,location,aminities})
{
    return<>
    <HotelPic img={img}/>
    <Description desc={desc} aminities={aminities} name={name}/>
    </>
}
export default Hotel;