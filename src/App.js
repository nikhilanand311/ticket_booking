import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Upcomingevents from './Pages/Upcomingevents';
import Home from './Pages/Home';
import FooterComp from './Components/Footer/FooterComp';
import LoginSignup from './Pages/LoginSignup';
import Detail from './Pages/Detail';
import TicketOrder from './Pages/TicketOrder';
import Checkout from './Pages/Checkout';
import Sidebar from './Pages/SidebarORG';
import LoginComp from './Components/Login/LoginComp';
import CardGrid from './Components/CardGrid/CardGrid';
import HeroComp from './Components/Hero/HeroComp';
import OrderformComp from './Components/TicketOrderFrom/OrderformComp';
import SidebarORG from './Pages/SidebarORG';
import SidebarADMIN from './Pages/SidebarADMIN';
import SidebarUSER from './Pages/SidebarUSER';
import Seatmap from './Pages/Seatmap';
import LoginORG from './Pages/LoginORG';
import LoginUSER from './Pages/LoginUSER';
import RegisterUSER from './Pages/RegisterUSER';
import RegisterORG from './Pages/RegisterORG';
import Userlogin from './Pages/Userlogin';
import Logout from './Pages/Logout';
import PrivateRoute from './Utils/PrivateRoute';
import {AuthProvider} from './Context/AuthContext';
import EventForm from './Components/EventForm/EventForm';
import MyeventsComp from './Components/Myevents/MyeventsComp';

import TicketcreateformComp from './Components/Ticketcreateform/TicketcreateformComp';
import EventDetailComp from './Components/Eventdetail/EventdetailComp';
import StripeCart from './Components/StripeCart/StripeCart';
import PaymentSuccess from './Components/PaymentSuccess/PaymentSuccess';
import QRscanComp from './Components/QRscan/QRscanComp';
import ValidateQR from './Components/ValidQR/ValidateQR';
import MysalesComp from './Components/Mysales/MysalesComp';
import ChartsComp from './Components/Charts/ChartsComp';
import UserSaleTable from './Components/UserSale/UserSaleTable';
import UserQRStatus from './Components/UserQR/UserQRStatus';
import ProfileEditComp from './Components/ProfileEdit/ProfileEditComp';
import LogOptionComp from './Components/LogOption/LogOptionComp';
import ReportComp from './Components/Report/ReportComp';




export default function () {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      
      <Routes>
        <Route index element={<Home/>}/>
        
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/upcomingevents" element={<Upcomingevents/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path="/logout" element={<Logout/>}/>
        {/* <Route path="/"  component={CardGrid} /> */}
        <Route path="/event/:id" element={<EventDetailComp/>} />
        <Route path="/orderform/:id" element={<OrderformComp/>} />
        <Route path="/cart" element={<StripeCart />} />
        <Route path="/ordersuccess" element={<PaymentSuccess/>}/>
        <Route path="/orderscan" element={<QRscanComp/>}/>
        <Route path="/validate" element={<ValidateQR/>}/>
        <Route path="profileuser" element={<ProfileEditComp/>}/>
        <Route path="/loginopt" element={<LogOptionComp/>}/>
        
        <Route path="/detail" element={<Detail/>}/> 
        <Route path="/orderform" element={<TicketOrder/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/seatmap" element={<Seatmap/>}/>
        <Route path="/loginorg" element={<LoginORG/>}/>
        <Route path="/loginu" element={<LoginUSER/>}/> 
        <Route path="/registeru" element={<RegisterUSER/>}/>
        <Route path="/registerorg" element={<RegisterORG/>}/>
        
        <Route path="/log" element={<Userlogin/>}/>
     
        <Route path="dashboard" element={<SidebarORG/>}> 
        
        <Route path="" element={<LoginComp/>}/>
         <Route path="overview" element={<ChartsComp/>}/>
          <Route path="tickets" element={<TicketcreateformComp/>}/>
          <Route path="events" element={<EventForm/>}/>
          <Route path="sales" element={<MysalesComp/>}/>
          <Route path="reports" element={<ReportComp/>}/>
          <Route path="create-event" element={<EventForm/>}/>
          <Route path="my-events" element={<MyeventsComp/>}/>
          <Route path="validate-tickets" element={<ValidateQR/>}/>
         </Route>

         
         <Route path="ordermanage" element={<SidebarUSER/>}> 
         {/* <Route element= {<PrivateRoute/>}> <Route element={<LoginComp/>} path=""/> </Route> */}
        <Route path="" element={<LoginComp/>}/>       
         
          <Route path="orders" element={<UserSaleTable/>}/>
          <Route path="validated" element={<UserQRStatus/>}/>
          <Route path="events" element={<HeroComp/>}/>
          <Route path="sales" element={<OrderformComp/>}/>
          
         </Route>

         <Route path="admin" element={<SidebarADMIN/>}> 
        <Route path="" element={<LoginComp/>}/>
         <Route path="overview" element={<LoginComp/>}/>
          <Route path="tickets" element={<CardGrid/>}/>
          <Route path="events" element={<HeroComp/>}/>
          <Route path="users" element={<OrderformComp/>}/>
          <Route path="organizers" element={<OrderformComp/>}/>
         </Route>
        </Routes>      
      </BrowserRouter>
      </AuthProvider>
      
      <br></br> <br></br> <br></br> <br></br>
      <FooterComp/>
      
    </div>
  )
}
