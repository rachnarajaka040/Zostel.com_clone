import Location from '../Components/destination/Location'
import About from '../Components/destination/About'
import Hotels from '../Components/destination/Hotels'
import Map from '../Components/destination/Map'
function Destination({id,name,hotels,desc,img})
{
    return(<>
            <Location name={name} img={img}/>
            <About name={name} desc={desc}/>
            <Hotels name={name} hotels={hotels}/>
            <Map/>

    </>)
}
export default Destination