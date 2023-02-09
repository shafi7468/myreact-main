import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Center from "./components/center/Center.js";
import Carousel from "./components/carousel/Carousel";
import ProductList from "./components/products/ProductList";
import StateDemo1 from "./components/state/StateDemo1";
import ShowhideDemo2 from "./components/state/ShowhideDemo2";
import MaxlengthTextbox from "./components/state/MaxlengthTextbox";

import PropsDemo1 from "./components/props/PropsDemo1";
import Stateaddition from "./components/stateexample/Stateaddition";
import EmployeeEntry from "./components/employee/EmployeeEntry";
import List from "./components/list/List";
import EmpMain from "./components/emp/EmpMain";
import ReactPaginate from "./components/emp/ReactPaginate";
import HttpDemo1 from "./components/HTTP/HttpDemo1";
import RegForm from "./components/form/RegForm";
import DynamicForm from "./components/form/DynamicForm";
import FormDemo1 from "./components/form/FormDemo1";
import FormValidation from "./components/form/FormValidation";
import AxiosDemo1 from "./components/HTTP/AxiosDemo1";
import AxiosDemo2 from "./components/HTTP/AxiosDemo2";
import Myinterceptor1 from "./components/interceptors/Interceptor1";
import Myinterceptor2 from "./components/interceptors/Myinterceptor2";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Navbar from "./components/navbar/Navbar";
import Features from "./Routes/Features";
import Pricing from "./Routes/Pricing";
import Errorpage from "./Routes/Errorpage";
import SideNavBar from "./components/navbar/SideNavBar";
import AboutUs from "./Routes/AboutUs";
import Client from "./Routes/Client";
import Product from "./Routes/Product";
import EmployeeMain from "./components/employee/EmployeeMain";


function App() {
 // Myinterceptor1();
  //Myinterceptor2();
  return (
    <>
    <Header></Header>   
      <SideNavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/AboutUs" element={<AboutUs/>} >
        <Route index element={<Client/>}/>
          <Route path='Client' element={<Client/>}/>
          <Route path='Product' element={<Product/>}></Route>
        </Route>
        <Route exact path="/ProductList" element={<ProductList/>} />
        <Route exact path="/Employee" element={<EmpMain/>}/>
        <Route exact path="*" element={<Errorpage/>} />
      </Routes>

      
      {/* <Carousel></Carousel>  */}
      {/* <ProductList></ProductList> */}
      {/* <Footer></Footer>  */}
      {/* <PropsDemo1 name="HI"></PropsDemo1> */}
      {/* <StateDemo1></StateDemo1> */}
      {/* <ShowhideDemo2></ShowhideDemo2> */}

      {/* <MaxlengthTextbox></MaxlengthTextbox> */}
      {/* <RegistrationForm></RegistrationForm> */}
      {/* <Stateaddition></Stateaddition> */}
      {/* <EmployeeMain/> */}
      {/* <EmployeeEntry/> */}
      {/* <EmpMain/> */}
      {/* <ReactPaginate/> */}
      {/* <List/> */}
      {/* <HttpDemo1/> */}

      {/* <RegForm/> */}
      {/* <DynamicForm/> */}
      {/* <FormDemo1/> */}
      {/* <FormValidation/> */}
      {/* <AxiosDemo1/> */}

      
    </>
  );
}

export default App;
