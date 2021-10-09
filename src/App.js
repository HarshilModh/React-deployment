import logo from './logo.svg';
import './App.css';
import { Mainheader } from './Components/Mainheader';
import { Route } from 'react-router-dom';
import {Welcome} from './Components/Welcome'
import { Product } from './Components/Product';
import { Productdetails } from './Components/Productdetails';
import {Header} from './Pages/Header'
import { Addemp } from './Pages/Addemp';
import { EmpList } from './Pages/EmpList';
import { useState } from 'react';
import { Footer } from './Pages/Footer';



function App() {
const title="Employe Managment"

  const [empList, setempList] = useState([

    {
      eId: 101,
      eName: "samir",
      eSalary: 10250.50
    },
    {
      eId: 102,
      eName: "sahdev",
      eSalary: 102500.50
    },
    {
      eId: 102,
      eName: "harsh",
      eSalary: 102500.50
    },
  
  ])
  return (
    <div>
    <Header title={title} searchbar={true}/>
    <Addemp/>
    <EmpList empList={empList}/>
    <Footer/>
    </div>

     );
}

export default App;
