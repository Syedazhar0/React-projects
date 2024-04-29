import logo from './logo.svg';
import './App.css';
import LatestProducts from './components/LatestProducts';
import UncontrolledExample from './components/Carousels';
 
function App() {
  return (
    <div style={{textAlign:"center"}}>
        <UncontrolledExample/>
         <hr/>
         <div  style={{paddingLeft:"20%", paddingRight: "10%"}}>
         <LatestProducts />
         </div>
         <br/><br/>         
    </div>
  );
}

export default App;
