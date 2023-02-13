import {Routes,Route} from 'react-router-dom';
import Destination from "./DestinationPage";
import HomePage from "./HomePage";
import Hotel from "./HotelPage"
import Destinations from './DestinationsPage';
import Paymentpage from './PaymentPage'


function Allrouter(){
    return (

        <div>
            <Routes>
                <Route path='/' element={<HomePage/>} ></Route>
                <Route path='/Destination/:id' element={<Destination/>} ></Route>
                <Route path='/Hotel/:cid' element={<Hotel/>} ></Route>
                <Route path='/Destinations' element={<Destinations/>} ></Route>
                <Route path='/Payment/:total/:price' element={<Paymentpage/>} ></Route>
            </Routes>
        </div>
    );
}

export default Allrouter;