import logo from './logo.svg';
import './App.css';
import { Mainheader } from './Components/Mainheader';
import { Route } from 'react-router-dom';
import {Welcome} from './Components/Welcome'
import { Product } from './Components/Product';
import { Productdetails } from './Components/Productdetails';


function App() {
  return (
    <div className="App">
                                              
        <div>
        <Mainheader/>
        <Route path="/Welcome"><Welcome/></Route>
        <Route path="/Product" exact  ><Product/></Route>

        <Route path="/Product/:pId"><Productdetails/>
        </Route>
        </div>
    </div>
  );
}

export default App;
