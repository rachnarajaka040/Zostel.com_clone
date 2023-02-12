
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import Destination from './Pages/DestinationPage';
import data from './demo.json'
function App() {

 
  const loc=data.Destinations[5];
  console.log(loc)
  return (
    <div className="App">
      <Navbar></Navbar>
      <Destination{...loc}/>
      <Footer />
    </div>
  );
}

export default App;
