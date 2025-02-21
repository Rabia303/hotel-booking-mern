import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Explore from '../Pages/Explore';
import Rooms_gallery from '../Pages/Rooms_gallery';
import Gallery from '../Pages/Gallery';
import Rooms_video from '../Pages/Rooms_video';
import Rooms from '../Pages/Rooms';
import Search from '../Pages/Search';
import Testimonials from '../Pages/Testimonials';
import Tandc from '../Pages/Tandc';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Services from '../Pages/Services';
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import Contact from "../Pages/Contact";
import Room_Booking from "../Pages/Room_Booking";
import Confirmation from "../Pages/Confirmation";
import Checkout from "../Pages/Checkout";


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/rooms_gallery" element={<Rooms_gallery />}></Route>
        <Route path="/rooms_video" element={<Rooms_video />}></Route>
        <Route path="/rooms" element={<Rooms />}></Route>
        <Route path="/booking" element={<Search />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/tandc" element={<Tandc />}></Route>
        <Route path="/test" element={<Testimonials />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="room_booking" element={<Room_Booking />}></Route>
        <Route path="/confirmation" element={<Confirmation />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App