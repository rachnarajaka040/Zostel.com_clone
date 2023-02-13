import Location from '../Components/destination/Location'
import About from '../Components/destination/About'
import Hotels from '../Components/destination/Hotels'
import Map from '../Components/destination/Map'
import { useParams } from 'react-router-dom';
import data from '../demo.json'
function Destination()
{
    const {id}=useParams();
    {}    
    return(<>
            <Location name={name} img={img}/>
            <About name={name} desc={desc}/>
            <Hotels name={name} hotels={hotels}/>
            <Map/>

    </>)
}
export default Destination