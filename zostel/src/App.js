
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import Hotel from './Pages/HotelPage'
import Destination from './Pages/DestinationPage';
import data from './demo.json'
function App() {

 
  const loc=data.Hotels[0];
  console.log(loc)
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hotel{...loc}/>
      <Footer />
    </div>
  );
}

export default App;
