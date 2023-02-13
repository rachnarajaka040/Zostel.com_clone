import Location from '../Components/destination/Location'
import About from '../Components/destination/About'
import Hotels from '../Components/destination/Hotels'
import Map from '../Components/destination/Map'
import { useParams } from 'react-router-dom';
import data from '../demo.json'
function Destination()
{
    const {id}=useParams();
    console.log(id)
    console.log(data.Destinations)
    let ele =null;
    data.Destinations.map(e=>{
        if(e.id==id)
        {
            ele=e;
           
        }
    })
    return(<>
            <Location name={ele.name} img={ele.img}/>
            <About name={ele.name} desc={ele.desc}/>
            <Hotels name={ele.name} hotels={ele.hotels}/>
            <Map/>

    </>)
}
export default Destination